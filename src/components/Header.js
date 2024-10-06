import React from "react";
import "./Header.css"; // Nous allons ajouter le CSS pour la mise en page

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/logo.png" alt="Dashmatchs Logo" />
      </div>
      <h1 className="site-name">Dashmatchs</h1>
    </header>
  );
}

export default Header;
