import "./index.css";
//import "./themes/theme-brutalist.css";
import { useState, useEffect, type JSX, Suspense } from "react";
import PixelBlast from "./components/PixelBlast";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DarkModeIcon from "./components/DarkModeIcon";
import { useTranslation } from "react-i18next";
import Name_svg from "./components/NameSVG";

enum Language {
  EN = "EN",
  DK = "DK",
}

enum MenuKey {
  ABOUT = "about",
  PROJECTS = "projects",
  CONTACT = "contact",
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface IMenuItem {
  key: MenuKey;
  label: string;
  component: JSX.Element;
}

export function App() {
  const [active, setActive] = useState<MenuKey>(
    (localStorage.getItem("activeMenu") as MenuKey) || MenuKey.ABOUT,
  );
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || Theme.DARK,
  );
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("language") as Language) || Language.EN,
  );
  const [rippleColor, setRippleColor] = useState<string>(
    theme === Theme.DARK ? "#fff" : "#000",
  );

  const rippleColors = {
    [Theme.DARK]: "#85334b",
    [Theme.LIGHT]: "#b4637a",
  };

  const { t, i18n } = useTranslation();
  const MenuItems: IMenuItem[] = [
    { key: MenuKey.ABOUT, label: t("About"), component: <About /> },
    { key: MenuKey.PROJECTS, label: t("Projects"), component: <Projects /> },
    { key: MenuKey.CONTACT, label: t("Contact"), component: <Contact /> },
  ];
  const activeItem = MenuItems.find((item) => item.key === active);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === Theme.DARK) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", theme);
      setRippleColor(rippleColors[theme]);
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", Theme.LIGHT);
      setRippleColor(rippleColors[theme]);
    }
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  useEffect(() => {
    localStorage.setItem("activeMenu", active);
  }, [active]);

  return (
    <Suspense>
      <div className="app">
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
          <PixelBlast
            className="pixelblast"
            color={rippleColor}
            pixelSize={3}
            patternScale={3}
            patternDensity={1}
            speed={0.2}
            edgeFade={0.1}
            transparent
          />
        </div>
        <button
          className="darkmode_toggle"
          onClick={() =>
            setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
          }
        >
          <DarkModeIcon theme={theme} />
        </button>
        <button
          className="language_toggle"
          onClick={() =>
            setLanguage(language === Language.EN ? Language.DK : Language.EN)
          }
        >
          {language}
        </button>
        <div className="content">
          <div className="left">
            {Name_svg()}
            {MenuItems.map((item) => (
              <button
                key={item.key}
                className={`menu_item${item.key === active ? " menu_item--active" : ""}`}
                onClick={() => setActive(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="right">
            {activeItem && (
              <div key={activeItem.key} className="view_transition">
                {activeItem.component}
              </div>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
