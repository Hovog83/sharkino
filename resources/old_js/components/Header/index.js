import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu"

function Header() {
  return (
    <header className="ht-header">
      <div className="container">
        <Menu />
      </div>
    </header>
  );
}

export default Header;
