import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Header } from "./components/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
