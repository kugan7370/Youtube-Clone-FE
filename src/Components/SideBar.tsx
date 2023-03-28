import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
import { BiLike } from "react-icons/bi";

import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdHistory } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import UserSubscriptions from "./UserSubscriptions";

function SideBar() {
    const { user } = useSelector((state: RootState) => state.user)
    return (
        <div className="w-[80px] lg:w-[220px] md:w-[200px] h-full px-4 fixed top-24 left-0 z-10 overflow-y-scroll ">
            <div className="flex flex-col space-y-3">

                <NavLink to={"/"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <GrHomeRounded size={20} />
                    <h1 className="ml-4 hidden lg:block md:block">Home</h1>
                </NavLink>


                <NavLink to={"trends"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <AiOutlineFire size={20} />
                    <h1 className="lg:block hidden md:block ml-4">Trending</h1>
                </NavLink>

                <NavLink to={"/subscriptions-videos"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
                    <MdOutlineSubscriptions size={20} />
                    <h1 className="lg:block hidden md:block ml-4">Subcriptions</h1>
                </NavLink>

                {/* divider */}
                <div className="border-t-2 border-gray-200 my-4"></div>


                <NavLink to={'/your-videos'} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
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

                <h1 className="hidden lg:block md:block">Subcriptions</h1>

                {(user && user.subscribtions && user?.subscribtions?.length > 0) && user.subscribtions.map((sub, i) => (
                    <UserSubscriptions subcriptionData={sub} key={i} />
                ))}





            </div>


        </div>
    );
}

export default SideBar;
