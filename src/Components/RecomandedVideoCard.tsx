import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomeVideos } from '../types/Video'
import moment from 'moment'


function RecomandedVideoCard({ videoData }: { videoData: HomeVideos }) {
    let title = videoData.title
    title = title.length > 50 ? title.slice(0, 50) + '...' : title

    return (
        <div className='flex w-full gap-5'>
            <NavLink to={`/details/${videoData._id}`} className="h-36 w-60 rounded-2xl overflow-hidden bg-red-300">
                <img className='w-full h-full object-cover' src={videoData.thumbnail} alt="img" />
            </NavLink>

            <div className="flex-1">
                <h1 className='text-sm font-normal'>{title}</h1>
                <h1 className='text-sm text-gray-500 mt-1'>{videoData.userDetails.username}</h1>
                <h1 className='text-sm text-gray-500 mt-2'>{videoData.views} views</h1>
                <h1 className='text-sm  text-gray-500'>{moment(videoData.createdAt).fromNow()}</h1>

            </div>




        </div>
    )
}

export default RecomandedVideoCard
