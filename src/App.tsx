import "./index.css";

import { useState, type JSX } from "react";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

interface IMenuItem {
  label : string;
  component : JSX.Element;
}


export function App() {
  
  const MenuItems : IMenuItem[] = [
    { label: "About", component: <About /> },
    { label: "Projects", component: <Projects /> },
    { label: "Contact", component: <Contact /> },
  ];
  const [active, setActive] = useState(MenuItems[0]);

  return (
  <div className="app">
    <div className="content"> 
        <div className="left">
          {MenuItems.map((item) => (
            <h1 className="menu_item" onClick={() => setActive(item)}> {item.label} </h1>
          ))}
        </div>
        <div className="right">
          {active?.component}
        </div>
      </div>
  </div>
  );
}

export default App;
