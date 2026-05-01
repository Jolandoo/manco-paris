export function Logo({ size = 20 }: { size?: number }) {
  const dotInset = "28%";
  const borderWidth = Math.max(2, size * 0.11);

  return (
    <div
      className="inline-flex items-center font-sans font-extrabold tracking-[-0.02em] text-fg leading-none"
      style={{ fontSize: size, gap: size * 0.25 }}
    >
      <span>MANC</span>
      <span
        className="relative inline-block"
        style={{ width: size * 0.95, height: size * 0.95 }}
      >
        <span
          className="absolute inset-0 rounded-full border-fg"
          style={{ borderWidth, borderStyle: "solid" }}
        />
        <span
          className="absolute rounded-full bg-accent"
          style={{ inset: dotInset }}
        />
      </span>
      <span
        className="font-normal tracking-[0.4em] text-fg"
        style={{ marginLeft: size * 0.5, fontSize: size * 0.6 }}
      >
        PARIS
      </span>
    </div>
  );
}
