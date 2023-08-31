import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { BiVideoPlus, BiImages } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { UserLogin } from '../features/Slicer/UserSlicer';
import { addVideo } from '../features/Slicer/VideoSlilcer';
import { log } from 'console';

interface Props {
    isVideoOpen: boolean;
    setisVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddVideoModal({ isVideoOpen, setisVideoOpen }: Props) {

    const { user } = useSelector((state: RootState) => state.user)



    const [videoDetails, setVideoDetails] = useState({
        title: '',
        description: '',
        thumbnail: '',
        video: '',
        category: '',
        tags: [] as string[], // Initialize tags as an empty array
    });

    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (e.target.name === 'tags') {
            // Split the tags by comma and remove empty spaces
            const tags = e.target.value.split(',').map(tag => tag.trim());

            setVideoDetails({
                ...videoDetails,
                tags: tags,
            });

        } else {
            setVideoDetails({
                ...videoDetails,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(videoDetails);
        if (videoDetails.title === '' || videoDetails.description === '' || videoDetails.thumbnail === '' || videoDetails.video === '' || videoDetails.category === '' || videoDetails.tags.length === 0) {
            alert('Please fill all the fields')
            return
        }

        const formData = new FormData();
        formData.append('title', videoDetails.title);
        formData.append('description', videoDetails.description);
        formData.append('thumbnail', videoDetails.thumbnail);
        formData.append('video', videoDetails.video);
        formData.append('category', videoDetails.category);
        formData.append('tags', JSON.stringify(videoDetails.tags));




        if (!user?._id) {
            alert('Please login to upload video')
            return
        }
        await addVideo(formData, user?._id)
        setisVideoOpen(false)
    }


    return (
        <div className={`${!isVideoOpen && "hidden"} absolute top-0 right-0 left-0 bottom-0 z-50  h-screen w-screen  flex item-center   bg-black bg-opacity-90 transition-opacity`}>
            <form encType="multipart/form-data" className="m-auto md:w-[50%] w-screen  h-auto bg-white">
                <div className="flex items-center justify-between p-4">
                    <h1 className='text-xl font-semibold'>Add Videos</h1>
                    <IoCloseCircleOutline size={26} color={'red'} onClick={() => setisVideoOpen(!isVideoOpen)} />
                </div>

                <div className="flex flex-col space-y-4 p-4">
                    <input name='title' onChange={handleChange} type="text" placeholder='Title' className='w-full border-2 border-gray-300 rounded-md p-2' />


                    <div className="flex gap-10 items-center">
                        <div className="border border-dotted border-blue-500 text-center p-5 flex w-1/2  items-center">
                            <input
                                name='video'
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleChange}
                                id='fileInput'
                            />
                            <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                                <div className='flex flex-col justify-center items-center'>
                                    <BiVideoPlus size={30} color={'rgb(59 130 246'} />
                                    <p className='text-blue-500'>Video</p>
                                </div>
                            </label>
                        </div>

                        <div className="border border-dotted border-blue-500 text-center p-5 flex  items-center w-1/2">
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleChange}
                                id='ImageInput'
                                name='thumbnail'
                            />
                            <label htmlFor="ImageInput" style={{ cursor: 'pointer' }}>
                                <div className='flex flex-col justify-center items-center'>
                                    <BiImages size={30} color={'rgb(59 130 246'} />
                                    <p className='text-blue-500'>Thumbnails</p>
                                </div>
                            </label>

                        </div>
                    </div>


                    <div className="flex gap-10">
                        <input name='category' onChange={handleChange} type="text" placeholder='Category' className='w-full border-2 border-gray-300 rounded-md p-2' />
                        <input name='tags' onChange={handleChange} type="text" placeholder="Tags  separate  ' , '" className='w-full border-2 border-gray-300 rounded-md p-2' />
                    </div>


                    {/* <input name='video' onChange={handleChange} type="file" placeholder='Video' className='w-full border-2 border-gray-300 rounded-md p-2' /> */}
                    {/* <input name='thumbnail' onChange={handleChange} type="file" placeholder='Thumbnail' className='w-full border-2 border-gray-300 rounded-md p-2' /> */}
                    <textarea name='description' rows={5} onChange={handleChange} placeholder='Description' className='w-full border-2 border-gray-300 rounded-md p-2' />
                    <button type='submit' onClick={handleSubmit} disabled={!videoDetails} className='bg-blue-500 text-white p-2 rounded-md'>Upload Video</button>
                </div>
            </form>

        </div>
    )
}

export default AddVideoModal
