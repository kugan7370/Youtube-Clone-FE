import React from "react";
import { GrMenu } from "react-icons/gr";
import { BsYoutube, BsFillMicFill } from "react-icons/bs";
import { HiSearch, HiUserCircle } from "react-icons/hi";
import { TbVideoPlus } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar() {
    return (
        <div className="w-full py-4 px-6 border border-gray-100 fixed z-999 bg-white  top-0 right-0 left-0">
            <div className="flex items-center justify-between shrink-1">
                {/* left */}
                <div className="flex items-center">
                    <GrMenu size={28} />
                    <BsYoutube className="ml-4" color="red" size={32} />
                    <h1 className="font-bold hidden md:block lg:block ml-2 lg:text-lg">Youtube</h1>
                </div>

                {/* center */}
                <div className="hidden md:flex lg:flex lg-block  flex-1 justify-center">
                    <div className="flex items-center md:px-5 lg:px-10 w-3/4">
                        <input
                            placeholder="search"
                            type="text"
                            className="w-full  py-2 px-4 focus:outline-sky-800   border-[1px] rounded-l-3xl"
                        />
                        <div className="w-20 h-full flex justify-center items-center border border-1 rounded-r-3xl hover:bg-gray-200">
                            <HiSearch size={26} />
                        </div>
                        <div className="w-16 ml-4 h-full rounded-full hover:bg-gray-200 flex justify-center items-center">
                            <BsFillMicFill size={26} />
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="flex items-center">
                    <div className="lg:hidden md:hidden w-12 p-2 ml-4 h-full rounded-full hover:bg-gray-200 flex justify-center items-center">
                        <HiSearch size={26} />
                    </div>
                    <div className="w-12 p-2 ml-4 h-full rounded-full hover:bg-gray-200 flex justify-center items-center">
                        <TbVideoPlus size={26} />
                    </div>

                    <div className="w-12 p-2 ml-4 h-full rounded-full hover:bg-gray-200 flex justify-center items-center">
                        <IoMdNotificationsOutline size={26} />
                    </div>
                    <div className="w-12 p-2 ml-4 h-full rounded-full hover:bg-gray-200 flex justify-center items-center">
                        <HiUserCircle size={26} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
