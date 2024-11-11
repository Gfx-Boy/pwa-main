import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Navigation/Navigation.css";

function Cart() {
  return (
    <>
      <div className="navmain">
        <div className="appbox">
          <Header />
          <main className="navcontent">
            <h2>CART</h2>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Cart;
