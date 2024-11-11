import React from "react";
import Navigation from "./components/pages/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from '../src/components/pages/Cart/Cart';
import Check from '../src/components/pages/Checklist/Check';
import Explore from './components/pages/Explore/Explore';
import Login from "../src/components/auth/Login";
import Signup from "../src/components/auth/Signup";
import AddProperty from "./components/pages/AddProperty/AddProperty";
import User from '../src/components/pages/User/User'
import Home from "./components/pages/Home/Home";
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/check" element={<Check />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/AddProperty" element={<AddProperty />} />
          <Route path="/Home" element={<Home />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
