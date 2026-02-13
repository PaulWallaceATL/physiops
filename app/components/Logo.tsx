/**
 * Physio PS logo – red, black, white brand mark.
 * Use iconOnly for favicon/small; with text for header.
 */
export default function Logo({
  className = "",
  iconOnly = false,
}: {
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={iconOnly ? 32 : 36}
        height={iconOnly ? 32 : 36}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <rect width="36" height="36" rx="8" fill="#dc2626" />
        <text
          x="18"
          y="23"
          textAnchor="middle"
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="14"
          fontWeight="700"
          letterSpacing="-0.02em"
        >
          PS
        </text>
      </svg>
      {!iconOnly && (
        <span className="font-semibold text-neutral-900 dark:text-white text-xl tracking-tight">
          Physio PS
        </span>
      )}
    </span>
  );
}
