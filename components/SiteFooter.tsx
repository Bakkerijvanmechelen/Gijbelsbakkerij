import Image from "next/image";
import { footerText } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto grid max-w-[980px] items-center gap-8 px-5 py-14 md:grid-cols-[347px_1fr] md:px-0">
        <Image src="/images/logo.jpg" alt="Gijbels" width={200} height={70} />
        <p className="font-footer text-xl leading-relaxed text-olive">{footerText}</p>
      </div>
      <div className="bg-grey py-3.5 text-center font-footer text-xl text-olive">© 2026 Bakkerij Gijbels</div>
    </footer>
  );
}
