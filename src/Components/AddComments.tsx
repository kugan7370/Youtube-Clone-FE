import React, { useState } from 'react'
const proImage = `https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB`

function AddComments() {
    const [comment, setcomment] = useState("")
    return (
        <div className="mb-8">
            <div className="flex ">
                <img className='h-10 w-10 rouded-full' src={proImage} alt="profile" />
                {/* //input  */}
                <input onChange={(e) => setcomment(e.target.value)} value={comment} className='ml-4 w-full outline-none  border rounded-2xl py-2 px-4' type="text" placeholder="Add a  comment..." />

                {/* button  */}

            </div>
            <div className="w-full flex">
                <button disabled={!comment} className={`ml-auto text-sm mt-3 text-white ${comment ? "bg-blue-700" : "bg-gray-400"} rounded-2xl py-1 px-3`}>Comment</button>

            </div>
        </div>
    )
}

export default AddComments
