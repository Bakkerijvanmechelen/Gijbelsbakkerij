/** Lopende strook met het assortiment; staat stil bij "minder beweging". */
export default function Marquee({ items }: { items: string[] }) {
  const row = (
    <ul className="flex shrink-0 items-center" aria-hidden>
      {items.map((t, i) => (
        <li key={i} className="flex items-center whitespace-nowrap font-display text-3xl text-blue/80 md:text-4xl">
          <span className="px-6 md:px-10">{t}</span>
          <span className="text-crust">✦</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden border-y border-ink/10 bg-paper py-5" role="presentation">
      <p className="sr-only">{items.join(", ")}</p>
      <div className="marquee-track flex w-max">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
