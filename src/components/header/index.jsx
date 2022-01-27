import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HeaderComponent = () => {
  const links = [
    { label: "Employees", path: "/" },
    { label: "About", path: "/about" },
  ];
  return (
    <header>
      <nav className="nav-container">
        {links.map((ele) => (
          <Link to={ele.path} key={ele.label}>
            {ele.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default HeaderComponent;
