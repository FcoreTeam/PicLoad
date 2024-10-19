import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Warning from "./popups/warning/Warning";
import Upload from "./popups/upload/Upload";
import Withdraw from "./popups/withdraw/Withdraw";
import Navbar from "./navbar/Navbar";




const Layout = () => {
  const { isOpen, popupName } = useSelector((state) => state.popups);
  console.log(isOpen);
  return (
    <>
      <Outlet />
      <Navbar />
      {isOpen && popupName === "warning" && <Warning />}
      {isOpen && popupName === "upload" && <Upload />}
      {isOpen && popupName === "withdraw" && <Withdraw />}
    </>
  );
};

export default Layout;
