import { useState } from "react";
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Earnings from "./Pages/Earnings.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Chat from "./Pages/Chat.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
