import React, { ChangeEvent, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AdminDashBoard } from "./Pages/AdminDashBoard";
import { FacaBook } from "./Pages/FacaBook";
import Home from "./Pages/Home";
import { Home2 } from "./Pages/Home2";
import { Joke } from "./Pages/Joke";
import { Landing } from "./Pages/Landing";
import { PortFolio } from "./Pages/PortFolio";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/home2" element={<Home2/>} />
        <Route path="/admin" element={<AdminDashBoard/>} />
        <Route path="/fb" element={<FacaBook/>} />
        <Route path="/port" element={<PortFolio/>} />
        <Route path="/joke" element={<Joke/>} />
        <Route path="/land" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
