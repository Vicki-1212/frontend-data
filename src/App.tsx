/** @format */

import "./App.css";
import Form from "./components/Form/Form";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cms" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
