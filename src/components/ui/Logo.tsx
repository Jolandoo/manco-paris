import Image from "next/image";

export function Logo({ size = 20 }: { size?: number }) {
  const height = size;
  const width = Math.round(height * (980 / 329));

  return (
    <Image
      src="/logo.png"
      alt="MANCO PARIS"
      width={width}
      height={height}
      className="object-contain"
      priority
    />
  );
}
