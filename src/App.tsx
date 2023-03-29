import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Details from "./Pages/Details";
import Home from "./Pages/Home";

function App() {
  const showSidebar = useSelector((state: any) => state.sidebar.showSidebar);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1">
        <div className={`${!showSidebar && "hidden"} w-[80px] lg:w-[220px] md:w-[200px]`}>
          <SideBar />
        </div>

        <main className="flex-1 mt-[76px]">

          <Routes>

            <Route path="/">
              <Route index element={<Home type="random" />} />
              <Route path="trends" element={<Home type="trending" />} />
              <Route path="your-videos" element={<Home type="yourVideos" />} />
              <Route path="get-liked" element={<Home type="get-liked" />} />
              <Route path="subscriptions-videos" element={<Home type="subscription" />} />
              <Route path="get-viewed" element={<Home type="get-viewed" />} />

              <Route path="details">
                <Route path=":id" element={<Details />} />
              </Route>
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
