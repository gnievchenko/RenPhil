import Link from "next/link";

export function Logo({
  href = "/",
  size = 28,
  showText = true,
}: {
  href?: string;
  size?: number;
  showText?: boolean;
}) {
  return (
    <Link href={href} className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="LabShare"
      >
        <defs>
          <linearGradient id="labshare-brand" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fa709a" />
            <stop offset="1" stopColor="#fee140" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#labshare-brand)" />
        <path
          d="M12.5 7h2.2v5.9l5.2 8.1a3.2 3.2 0 0 1-2.7 5H14.8a3.2 3.2 0 0 1-2.7-5l5.2-8.1V7H12.5Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="none"
          transform="translate(-0.5 0)"
        />
      </svg>
      {showText ? (
        <span className="text-lg font-semibold tracking-tight">LabShare</span>
      ) : null}
    </Link>
  );
}
