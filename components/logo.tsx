import Image from "next/image";

export function LogoMark({
  size = 28,
  variant = "white",
}: {
  size?: number;
  /** white = for dark backgrounds; color = ink mark for light surfaces */
  variant?: "white" | "color";
}) {
  const src =
    variant === "color" ? "/brand/logo-icon.svg" : "/brand/logo-white.svg";

  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="shrink-0"
      aria-hidden="true"
    />
  );
}

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} variant="white" />
      <span className="text-lg font-semibold tracking-tight text-fg">
        Plarem
      </span>
    </span>
  );
}
