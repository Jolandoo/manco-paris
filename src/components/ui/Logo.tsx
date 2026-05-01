import Image from "next/image";

export function Logo({ size = 20, className = "" }: { size?: number; className?: string }) {
  const height = size;
  const width = Math.round(height * (980 / 329));

  return (
    <Image
      src="/logo.png"
      alt="MANCO PARIS"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
    />
  );
}
