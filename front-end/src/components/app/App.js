import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";

const App = ({state}) => {
  console.log(state)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main state={state.mainPage} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
