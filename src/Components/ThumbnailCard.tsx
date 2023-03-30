import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomeVideos } from '../types/Video'
import moment from 'moment'

function ThumbnailCard({ videoData }: { videoData: HomeVideos }) {

    let covertTilte = videoData.title

    if (covertTilte.length > 65) {
        covertTilte = covertTilte.slice(0, 65) + '...'
    }


    return (
        <div className='flex flex-col w-full '>
            {/* image */}
            <NavLink to={`/details/${videoData._id}`}
                className="h-48 rounded-2xl overflow-hidden">
                <img className='w-full h-full object-cover' src={videoData.thumbnail} alt="img" />
            </NavLink>

            {/* details */}
            <div className="w-full flex mt-2">
                <img className='h-10 w-10 rouded-full' src={videoData.userDetails.img} alt="profile" />
                {/* info */}
                <div className="flex flex-col lg:ml-2 md:2 ">
                    <h1 className='font-medium text-sm'>{covertTilte}</h1>
                    <h1 className='text-sm text-gray-500 mt-1'>{videoData.userDetails.username}</h1>
                    <div className="flex">
                        <h1 className='text-sm text-gray-500'>{videoData.views} views .</h1>
                        <h1 className='text-sm  text-gray-500 ml-1'>{moment(videoData.createdAt).fromNow()}</h1>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default ThumbnailCard
