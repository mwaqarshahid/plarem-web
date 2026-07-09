export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      aria-hidden="true"
    >
      <g transform="translate(0, 7)">
        <path
          d="M 34 54 A 30 30 0 1 1 94 54"
          fill="none"
          stroke="#3DD9BD"
          strokeWidth="4.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M 39 54 A 25 25 0 1 1 89 54"
          fill="none"
          stroke="#9BA3FF"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M64 24 C49.5 24 39 35 39 48.5 C39 55.5 48.5 67 64 91 C79.5 67 89 55.5 89 48.5 C89 35 78.5 24 64 24 Z"
          fill="#4F5BE8"
        />
        <circle cx="64" cy="47" r="11.5" fill="#FFFFFF" opacity="0.96" />
        <circle cx="64" cy="47" r="5" fill="#00A98F" />
      </g>
    </svg>
  );
}

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="text-lg font-semibold tracking-tight text-fg">
        Plarem
      </span>
    </span>
  );
}
