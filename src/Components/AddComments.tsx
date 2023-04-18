import React, { useState } from 'react'
import { addComment } from '../features/Slicer/VideoSlilcer'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import { getCommentByVideoId } from '../features/Slicer/CommentSlicer'
const proImage = `https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB`

function AddComments({ videoId }: { videoId?: string }) {
    const [comment, setcomment] = useState("")
    const { user } = useSelector((state: RootState) => state.user)


    const dispatch = useDispatch<AppDispatch>()
    const handleComment = async () => {
        if (!videoId) return
        if (!comment) return

        await addComment({ comment: comment, videoId: videoId })
        await dispatch(getCommentByVideoId(videoId))
        setcomment("")
    }
    return (
        <div className="mb-8">
            <div className="flex ">
                <img className='h-10 w-10 rouded-full' src={user?.img} alt="profile" />
                {/* //input  */}
                <input onChange={(e) => setcomment(e.target.value)} value={comment} className='ml-4 w-full outline-none focus:outline-sky-800 focus:border-none  border rounded-2xl py-2 px-4' type="text" placeholder="Add a  comment..." />

                {/* button  */}

            </div>
            <div className="w-full flex">
                <button onClick={handleComment} disabled={!comment} className={`ml-auto text-sm mt-3 text-white ${comment ? "bg-blue-700" : "bg-gray-400"} rounded-2xl py-1 px-3`}>Comment</button>

            </div>
        </div>
    )
}

export default AddComments
