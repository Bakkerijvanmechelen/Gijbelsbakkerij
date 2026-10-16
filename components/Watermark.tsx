import Image from "next/image";

/** De vervaagde korenschoof die op de oude site links onderaan de tekstblokken staat. */
export default function Watermark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/watermerk-schoof.png"
      alt=""
      width={1200}
      height={400}
      aria-hidden
      className={`pointer-events-none absolute bottom-0 left-0 w-[560px] max-w-none opacity-40 ${className}`}
    />
  );
}
