import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Page from "../pages/Page";

const App = () => {
  return (
    <Page>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Page>
  );
};

export default App;
