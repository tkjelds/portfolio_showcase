interface Props {
  mode?: "light" | "dark";
}

export default function DarkModeIcon({ mode = "light" }: Props) {
  // Moon for dark mode, sun for light mode
  if (mode === "dark") {
    return (
      <svg className="darkmode_icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M21.5 14.5a9 9 0 1 1-12-12 7 7 0 0 0 12 12z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg className="darkmode_icon" viewBox="0 0 24 24" aria-hidden="true">
      <g fill="currentColor">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v3M12 20v3M4.22 4.22 6.34 6.34M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78 6.34 17.66M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
