import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1">
        <div className="w-[80px] lg:w-[220px] md:w-[200px]">
          <SideBar />
        </div>

        <main className="flex-1 mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
