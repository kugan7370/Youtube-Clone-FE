import React from 'react'
import { CommentDetail } from '../types/Video'
import AddComments from './AddComments'
import CommentCard from './CommentCard'

interface Props {
    comments: CommentDetail[],
    videoId?: string
}

function Comments({ comments, videoId }: Props) {
    return (
        <div className="px-6">
            {/* add comments  */}
            <AddComments videoId={videoId} />

            {(comments && comments.length > 0) && (<div className='flex flex-col space-y-6 '>
                {comments?.map((comment) => (
                    <CommentCard comment={comment} key={comment._id} />
                ))}

            </div>)}
        </div>
    )
}

export default Comments
