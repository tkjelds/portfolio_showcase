import "./index.css";

import { useState, useEffect, type JSX } from "react";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DarkModeIcon from "./components/DarkModeIcon";
import { useTranslation } from 'react-i18next';


enum Language {
  EN = "en",
  DK = "dk",
}

enum MenuKey {
  ABOUT,
  PROJECTS ,
  CONTACT,
}

interface IMenuItem {
  key : MenuKey;
  label : string;
  component : JSX.Element;
}


export function App() {
  
  const [active, setActive] = useState<MenuKey>(MenuKey.ABOUT);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>(Language.EN);
  const { t, i18n } = useTranslation();
  
  const MenuItems : IMenuItem[] = [
    { key: MenuKey.ABOUT, label: t("About"), component: <About /> },
    { key: MenuKey.PROJECTS, label: t("Projects"), component: <Projects /> },
    { key: MenuKey.CONTACT, label: t("Contact"), component: <Contact /> },
  ];
  
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [darkMode]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
  <div className="app">
    <button className="darkmode_toggle" onClick={() => setDarkMode(!darkMode)} >
      <DarkModeIcon mode={darkMode ? "dark" : "light"} />
    </button>
    <button className="language_toggle" onClick={() => setLanguage(language === Language.EN ? Language.DK : Language.EN)}>
      {language === Language.EN ? "EN" : "DK"}
    </button>
    <div className="content"> 
      <div className="left">
        {MenuItems.map((item) => (
          <button className="menu_item" onClick={() => setActive(item.key)}> {item.label} </button>
        ))}
      </div>
      <div className="right">
        {MenuItems.find(item => item.key === active)?.component}
      </div>
      </div>
  </div>
  );
}

export default App;
