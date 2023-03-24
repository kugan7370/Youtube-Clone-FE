import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
import { BiLike } from "react-icons/bi";

import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdHistory } from "react-icons/md";
import { NavLink } from "react-router-dom";
function SideBar() {
    return (
        <div className="w-[220px] h-full px-4 fixed top-20 left-0 z-999 ">
            <div className="flex flex-col space-y-3">

                <NavLink to={"/"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <GrHomeRounded size={20} />
                    <h1 className="ml-4 hidden lg:block md:block">Home</h1>
                </NavLink>


                <NavLink to={"home"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <AiOutlineFire size={20} />
                    <h1 className="lg:block hidden md:block ml-4">Trending</h1>
                </NavLink>

                <NavLink to={"home"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <MdOutlineSubscriptions size={20} />
                    <h1 className="lg:block hidden md:block ml-4">Subcriptions</h1>
                </NavLink>

                {/* divider */}
                <div className="border-t-2 border-gray-200 my-4"></div>


                <NavLink to={"home"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <MdOutlineVideoLibrary size={20} />
                    <h1 className="lg:block hidden md:block ml-4">Your videos</h1>
                </NavLink>

                <NavLink to={"home"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <MdHistory size={20} />
                    <h1 className="lg:block hidden md:block ml-4">History</h1>
                </NavLink>

                <NavLink to={"home"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <BiLike size={20} />
                    <h1 className="lg:block hidden md:block ml-4">Liked videos</h1>
                </NavLink>


                {/* divider */}
                <div className="border-t-2 border-gray-200 my-4"></div>

                <h1 className="">Subcriptions</h1>

                <NavLink to={"home"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <MdOutlineSubscriptions size={20} />
                    <h1 className="ml-4 hidden lg:block md:block ">Subcriptions</h1>
                </NavLink>
                <NavLink to={"home"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <MdOutlineSubscriptions size={20} />
                    <h1 className="hidden lg:block md:block ml-4">Subcriptions</h1>
                </NavLink>
                <NavLink to={"home"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <MdOutlineSubscriptions size={20} />
                    <h1 className="hidden lg:block md:block ml-4">Subcriptions</h1>
                </NavLink>



            </div>


        </div>
    );
}

export default SideBar;
