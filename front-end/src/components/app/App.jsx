import { Routes, Route } from "react-router-dom";

import Main from "../pages/main/Main";
import Shop from "../pages/shop/Shop";
import Bonus from "../pages/bonus/Bonus";
import Login from "../pages/login/Login";
import Layout from "../pages/Layout";

const App = () => {
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
