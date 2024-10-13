import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// components
import Main from "../pages/main/Main";
import Shop from "../pages/shop/Shop";
import Bonus from "../pages/bonus/Bonus"
import Login from "../pages/login/Login";
import Page from "../pages/Page";
import { checkMemory } from "../../store/utils/mainUtils";
import { useSelector } from "react-redux";

const App = () => {
  const { memoryAll, memoryUse } = useSelector((state) => state.user);

  useEffect(() => {
    checkMemory(memoryAll, memoryUse);
  }, []);

  return (
    <Page>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bonus" element={<Bonus />} />
      </Routes>
    </Page>
  );
};

export default App;
