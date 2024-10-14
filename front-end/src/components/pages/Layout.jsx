import React from "react";
import Warning from "./popups/warning/Warning";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import Popup from "./popups/Popup";
import { useSelector } from "react-redux";

const Layout = () => {
  const { isOpen, popupName } = useSelector((state) => state.popups);
  console.log(isOpen);
  return (
    <>
      <Outlet />
      <Navbar />
      {isOpen && popupName === "warning" && <Warning />}
    </>
  );
};

export default Layout;
