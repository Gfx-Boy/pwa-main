import React from 'react'
import '../Header/Header.css'
import Menu from "../../../images/Menu.png";
import vector from "../../../images/Vector.png";
import navlogo from "../../../images/navlogo.png";

function Header() {
  return (
    <header className="navheader">
    <img src={navlogo} alt="Logo" className="navlogo" />{" "}
    {/* Add the image */}
    <div className="navicons">
      <img src={vector} alt="bell" className="navicon" />
      <img src={Menu} alt="nav" className="navicon" />
    </div>
  </header>
  )
}

export default Header