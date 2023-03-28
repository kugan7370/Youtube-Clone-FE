import React from 'react'
import { NavLink } from 'react-router-dom'

interface InputProps {
    img: string,
    username: string
}


function UserSubscriptions({ subcriptionData }: { subcriptionData: InputProps }) {


    return (
        <NavLink to={"home"} className="flex items-center hover:bg-gray-200 p-2 rounded-lg" >
            <img className='h-8 w-8 rouded-full object-cover' src={subcriptionData.img} alt="profile" />

            <h1 className="ml-4 hidden lg:block md:block ">{subcriptionData.username}</h1>
        </NavLink>

    )
}

export default UserSubscriptions
