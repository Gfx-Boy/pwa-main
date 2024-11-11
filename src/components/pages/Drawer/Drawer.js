import React from "react";
import "../Drawer/Drawer.css";
import user from "../../../images/user.png";
import { MdInbox } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";

function Drawer({ toggleDrawer }) {
  return (
    <div className="out" onClick={toggleDrawer}>
      <div className="in" onClick={(e) => e.stopPropagation()}>
        <div className="open">
          <div className="profile-section">
            <img src={user} alt="Profile" className="profile-pic" />
            <div className="information">
              <h2 className="profile-name">Name</h2>
              <p className="profile-email">demo@gmail.com</p>
            </div>
          </div>
          <nav>
            <ul className="listmenu">
              <li><MdInbox className="liicons" /> Dashboard</li>
              <li><IoMdNotificationsOutline className="liicons" /> Notifications</li>
              <li><RxDashboard className="liicons" /> Properties</li>
              <li><FaRegStar className="liicons" /> Premium Content</li>
              <li><BsTools className="liicons" /> Contractor Recommendations</li>
              <li><MdPayment className="liicons" /> Subscription & Payment</li>
              <li><IoSettingsOutline className="liicons" /> Settings</li>
              <li><IoMdHelpCircleOutline className="liicons" /> Help & Support</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
