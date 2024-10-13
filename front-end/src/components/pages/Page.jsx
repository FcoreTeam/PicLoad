import React from "react";
import MemoryWarning from "./popups/memory-warning/Memory-warning";
import Navbar from "./navbar/Navbar";

const Page = ({ children }) => {
  return (
    <>
      {children}
      <Navbar />
      {!true && <MemoryWarning />}
    </>
  );
};

export default Page;
