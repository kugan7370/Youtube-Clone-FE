import React from 'react'
import AddComments from './AddComments'
import CommentCard from './CommentCard'

function Comments() {
    return (
        <div className="px-6">
            {/* add comments  */}
            <AddComments />

            <div className='flex flex-col space-y-6 '>
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
        </div>
    )
}

export default Comments
