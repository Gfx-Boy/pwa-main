import React from "react";
import "../Navigation/Navigation.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
function Navigation() {
  return (
    <div className="navmain">
      <div className="appbox">
        <Header/>
        {/* Main Content */}
        <main className="navcontent">
          <h2>Seasonal Checklist</h2>
        </main>
        <Footer/>    
      </div>
    </div>
  );
}

export default Navigation;
