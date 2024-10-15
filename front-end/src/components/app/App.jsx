import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// components
import Main from "../pages/main/Main";
import Shop from "../pages/shop/Shop";
import Bonus from "../pages/bonus/Bonus";
import Login from "../pages/login/Login";
import Layout from "../pages/Layout";
import { checkMemory } from "../../store/utils/mainUtils";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { memoryAll, memoryUse } = useSelector((state) => state.user);
  // const { isOpen } = useSelector((state) => state.popups);
  // const dispatch = useDispatch();
  // const checkMemoryUi = () => dispatch(checkMemory(memoryAll, memoryUse));
  // checkMemoryUi();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bonus" element={<Bonus />} />
      </Route>
    </Routes>
  );
};

export default App;
