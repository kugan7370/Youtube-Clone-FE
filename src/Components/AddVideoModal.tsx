import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { UserLogin } from '../features/Slicer/UserSlicer';

interface Props {
    isVideoOpen: boolean;
    setisVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddVideoModal({ isVideoOpen, setisVideoOpen }: Props) {

    const [userDetails, setuserDetails] = useState({
        title: '',
        description: '',
        video: '',
        category: '',
        tags: '',
    })

    const dispatch = useDispatch<AppDispatch>()

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setuserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()


        // dispatch(UserLogin(userDetails))
        setisVideoOpen(false)
    }


    return (
        <div className={`${!isVideoOpen && "hidden"} absolute top-0 right-0 left-0 bottom-0 z-50  h-screen w-screen  flex item-center   bg-black bg-opacity-90 transition-opacity`}>
            <div className="m-auto w-[50%] h-auto bg-white">
                <div className="flex items-center justify-between p-4">
                    <h1 className='text-xl font-semibold'>Add Videos</h1>
                    <IoCloseCircleOutline size={26} color={'red'} onClick={() => setisVideoOpen(!isVideoOpen)} />
                </div>

                <div className="flex flex-col space-y-4 p-4">
                    <input name='title' onChange={handleChange} type="text" placeholder='Title' className='w-full border-2 border-gray-300 rounded-md p-2' />
                    <input name='video' onChange={handleChange} type="file" placeholder='Video' className='w-full border-2 border-gray-300 rounded-md p-2' />
                    <input name='thumbnail' onChange={handleChange} type="file" placeholder='Thumbnail' className='w-full border-2 border-gray-300 rounded-md p-2' />
                    <textarea name='description' rows={5} onChange={handleChange} placeholder='Description' className='w-full border-2 border-gray-300 rounded-md p-2' />
                    <button onClick={handleSubmit} disabled={!userDetails} className='bg-blue-500 text-white p-2 rounded-md'>Upload Video</button>
                </div>
            </div>

        </div>
    )
}

export default AddVideoModal
