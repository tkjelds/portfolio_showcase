import "./index.css";

import { useState } from "react";

export function App() {
  enum MenuKey {
    ABOUT,
    CONTACT,
    PROJECTS,
  }

  const [active, setActive] = useState(MenuKey.ABOUT);

  const renderComponent = () => {
    switch (active) {
      case MenuKey.ABOUT :
        return <h1>About</h1>;
      case MenuKey.CONTACT :
        return <h1>Contact</h1>;
      case MenuKey.PROJECTS :
        return <h1>Projects</h1>;
      default:
        return <h1>About</h1>;
    }
  };



  return (
<div className="app">
  <div className="content"> 
      <div className="left">
        <h1 className="menu_item" onClick={() => setActive(MenuKey.ABOUT)}>About</h1>
        <h1 className="menu_item" onClick={() => setActive(MenuKey.PROJECTS)}>Projects</h1>
        <h1 className="menu_item" onClick={() => setActive(MenuKey.CONTACT)}>Contact</h1>
      </div>
      <div className="right">
        {renderComponent()}
      </div>
    </div>
</div>
  );
}

export default App;
