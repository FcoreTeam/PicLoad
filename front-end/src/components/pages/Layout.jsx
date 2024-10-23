import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Navbar from "./navbar/Navbar";

import Warning from "./popups/warning/Warning";
import Upload from "./popups/upload/Upload";
import Withdraw from "./popups/withdraw/Withdraw";
import Upgrade from "./popups/upgrade/Upgrade";

const Layout = () => {
  const { isOpen, popupName } = useSelector((state) => state.popups);

  return (
    <>
      <Outlet />
      <Navbar />
      {isOpen && popupName === "warning" && <Warning />}
      {isOpen && popupName === "upload" && <Upload />}
      {isOpen && popupName === "withdraw" && <Withdraw />}
      {isOpen && popupName === "upgrade" && <Upgrade />}
    </>
  );
};

export default Layout;
