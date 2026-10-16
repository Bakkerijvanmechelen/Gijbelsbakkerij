"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import { adminClient } from "@/lib/supabase/admin";
import { supabaseServer } from "@/lib/supabase/server";

export type FormState = { ok: boolean; message: string } | null;

const TABLE = "gijbels_contact_requests";

export async function signIn(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { ok: false, message: "Vul e-mailadres en wachtwoord in." };

  const supabase = await supabaseServer();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.user) return { ok: false, message: "Onjuiste inloggegevens." };
  if (data.user.app_metadata?.role !== "admin") {
    await supabase.auth.signOut();
    return { ok: false, message: "Dit account heeft geen toegang tot het beheer." };
  }
  redirect("/admin");
}

export async function signOut() {
  const supabase = await supabaseServer();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function changeOwnPassword(_prev: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const password = String(formData.get("password") ?? "");
  const repeat = String(formData.get("repeat") ?? "");
  if (password.length < 12) return { ok: false, message: "Gebruik minstens 12 tekens." };
  if (password !== repeat) return { ok: false, message: "De wachtwoorden komen niet overeen." };
  const supabase = await supabaseServer();
  const { error } = await supabase.auth.updateUser({ password });
  if (error) return { ok: false, message: "Wijzigen mislukt. Probeer opnieuw." };
  return { ok: true, message: "Wachtwoord gewijzigd." };
}

export async function toggleHandled(id: string, handled: boolean) {
  await requireAdmin();
  await adminClient().from(TABLE).update({ handled }).eq("id", id);
  revalidatePath("/admin", "layout");
}

export async function markAllHandled() {
  await requireAdmin();
  await adminClient().from(TABLE).update({ handled: true }).eq("handled", false);
  revalidatePath("/admin", "layout");
}

export async function deleteRequest(id: string) {
  await requireAdmin();
  await adminClient().from(TABLE).delete().eq("id", id);
  revalidatePath("/admin", "layout");
}
