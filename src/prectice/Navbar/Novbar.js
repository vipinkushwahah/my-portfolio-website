import { useEffect, useState } from "react";
import "./novbar.css";
import { NavLink, Outlet } from "react-router-dom";

const Novbar = () => {
  const [theme, setTheme] = useState("Light-Theme");

  const toggle =  () => {
    if (
      theme === "Dark-Theme" ? setTheme("Light-Theme") : setTheme("Dark-Theme")
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <span className={theme}>
      <span className="main-container">
        <span className="leftside">
          <span className="name3">
            😎Vipin 
          </span>
            <span className="toggel-button">
            <button onClick={() => toggle()}>
              {theme === "Dark-Theme" ? "Light-Theme" : "Dark-Theme"}
            </button>
          </span>
        </span>
        <span className="rightside">
           
          <NavLink to="/" ><span className="v"> Home </span> </NavLink>
          <NavLink to="experience" > <span className="v"> Experience  </span> </NavLink>
          <NavLink to="portfolio" > <span className="v">   Portfolio </span> </NavLink>
          <NavLink to="services" > <span className="v">    Services  </span> </NavLink>
           
          
          <span>
          <NavLink to="contect" > <button className="toggel-button">Contact</button> </NavLink>
          </span>
          <main>
            <Outlet />
          </main>
        </span>
      </span>
    </span>
  );
};
export default Novbar
