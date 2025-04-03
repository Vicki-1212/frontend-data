/** @format */

import "./App.css";
import Form from "./components/Form/Form";
import HomePage from "./components/HomePage/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cms" element={<Form />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
