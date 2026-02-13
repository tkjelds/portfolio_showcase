import "./index.css";

import { useState, useEffect, type JSX } from "react";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DarkModeIcon from "./components/DarkModeIcon";

enum Language {
  EN = "EN",
  DK = "DK",
}

enum MenuKeys {
  ABOUT,
  PROJECTS ,
  CONTACT,
}

interface IMenuItem {
  key : MenuKeys;
  label : string;
  component : JSX.Element;
}

const MenuItems : IMenuItem[] = [
  { key: MenuKeys.ABOUT, label: "About", component: <About /> },
  { key: MenuKeys.PROJECTS, label: "Projects", component: <Projects /> },
  { key: MenuKeys.CONTACT, label: "Contact", component: <Contact /> },
];

export function App() {
  
  const [active, setActive] = useState<MenuKeys>(MenuKeys.ABOUT);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [darkMode]);

  return (
  <div className="app">
    <button className="darkmode_toggle" onClick={() => setDarkMode(!darkMode)} >
      <DarkModeIcon mode={darkMode ? "dark" : "light"} />
    </button>
    <button className="language_toggle" onClick={() => setLanguage(language === Language.EN ? Language.DK : Language.EN)}>
      {language === Language.EN ? "DK" : "EN"}
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
