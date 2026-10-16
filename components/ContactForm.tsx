"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/(site)/contact/actions";

const field = "w-full border border-black/60 bg-white px-3 py-2.5 text-base outline-none focus:border-blue focus:ring-2 focus:ring-blue/30";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, null);

  if (state?.ok) {
    return (
      <p role="status" className="bg-grey p-8 text-lg">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="grid gap-6 md:grid-cols-2">
      <label className="grid gap-1.5 text-sm">
        Voornaam *
        <input name="first" required autoComplete="given-name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm">
        Achternaam *
        <input name="last" required autoComplete="family-name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm md:col-span-2">
        E-mail *
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm md:col-span-2">
        Uw bericht *
        <textarea name="message" required rows={5} className={field} />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      {state && !state.ok && (
        <p role="alert" className="font-bold text-red-700 md:col-span-2">
          {state.message}
        </p>
      )}
      <button disabled={pending} className="bg-blue px-6 py-3 text-base text-white transition hover:bg-black disabled:opacity-60 md:col-span-2">
        {pending ? "Verzenden…" : "Verzenden"}
      </button>
    </form>
  );
}
