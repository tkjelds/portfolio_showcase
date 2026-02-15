import { Theme } from "@/App";

interface Props {
  theme: Theme;
}

export default function DarkModeIcon({ theme = Theme.DARK }: Props) {
  const isDark = theme === Theme.DARK;

  return (
    <span className="darkmode_icon" aria-hidden="true">
      <svg
        className={`darkmode_icon__glyph darkmode_icon__glyph--moon${isDark ? " darkmode_icon__glyph--visible" : ""}`}
        viewBox="0 0 24 24"
      >
        <path d="M21.5 14.5a9 9 0 1 1-12-12 7 7 0 0 0 12 12z" />
      </svg>
      <svg
        className={`darkmode_icon__glyph darkmode_icon__glyph--sun${!isDark ? " darkmode_icon__glyph--visible" : ""}`}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v3M12 20v3M4.22 4.22 6.34 6.34M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78 6.34 17.66M17.66 6.34l2.12-2.12"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
