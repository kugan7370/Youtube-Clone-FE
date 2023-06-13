import React, { useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { CommentDetail } from '../types/Video'
import moment from 'moment'
interface Props {
    comment: CommentDetail
}

function CommentCard({ comment }: Props) {
    const [showMore, setshowMore] = useState(false)


    let commentsDetails = comment.comment.toString()

    if (commentsDetails.length > 200) {
        if (!showMore) {
            commentsDetails = commentsDetails.slice(0, 200) + '...'
        }
    }
    return (
        <div className='flex'>
            <img className='h-10 w-10 rouded-full' src={comment.img} alt="profile" />
            <div className="ml-4 mb-4">
                <div className="flex items-center">
                    <p className="font-semibold text-sm text-gray-600">{comment.username}</p>
                    <p className=' text-xs ml-2'>{moment(comment.createdAt).fromNow()}</p>
                </div>
                <p className="text-sm mt-2">{commentsDetails} </p>
                {commentsDetails.length > 200 && <h1 className='text-sm font-semibold mt-2 cursor-pointer' onClick={() => setshowMore(!showMore)}>{showMore ? "Show less" : "Read more"}</h1>}


                {/* <div className="flex items-center mt-4">

                    <div className="p-2 hover:bg-gray-200 bg-gray-100 flex items-center rounded-2xl">
                        <AiOutlineLike size={20} />

                    </div>
                    <h1 className='ml-2'>27</h1>
                    <div className="ml-4 p-2 hover:bg-gray-200 bg-gray-100 flex items-center rounded-2xl">
                        <AiOutlineDislike size={20} />

                    </div>
                    <h1 className='ml-2'>2</h1>




                </div> */}
            </div>





        </div >
    )
}

export default CommentCard
