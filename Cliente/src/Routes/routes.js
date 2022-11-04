import React from "react";
import Login from "../Login/login";
import Cadastro from "../Cadastro/cadastro";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/home" element={<h1> tela home</h1>} />
      </Routes>
    </Router>
  );
};

export default Routering;