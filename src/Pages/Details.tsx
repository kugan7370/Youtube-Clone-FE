import React, { useState, useEffect } from 'react'
import RecomandedVideoCard from '../Components/RecomandedVideoCard'
import { TbBellRingingFilled } from 'react-icons/tb'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import Comments from '../Components/Comments'
import { disableSidebar } from '../features/Slicer/SidebarSlicer'
import { useParams } from 'react-router-dom'
import { getRecommendedvideos, getVideoById, likeVideo, viewVideo, } from '../features/Slicer/VideoSlilcer'
import { AppDispatch, RootState, } from '../app/store'
import { HomeVideos, Videos } from '../types/Video'
import { addVideoHistory, subscriptions } from '../features/Slicer/UserSlicer'

function Details() {
    const [showMore, setshowMore] = useState(false)
    const [getVideoDetails, setgetVideoDetails] = useState<Videos[]>()
    const [getRecommendVideoDetails, setGetRecommendVideoDetails] = useState<HomeVideos[]>()
    const { user } = useSelector((state: RootState) => state.user)
    const [isChange, setisChange] = useState(false)


    const dispatch = useDispatch<AppDispatch>()


    const { id } = useParams()

    useEffect(() => {
        (async () => {
            if (!id) return
            //increase views
            await viewVideo(id)

            //add video history
            await addVideoHistory(id)

            //add recommended videos
            const recommendedVideos = await getRecommendedvideos(id)
            if (recommendedVideos && recommendedVideos.length > 0) {
                setGetRecommendVideoDetails(recommendedVideos)
            }


            const results = await getVideoById(id)

            if (results && results.length > 0) {
                setgetVideoDetails(results)
            }
        })();

    }, [id, isChange])


    useEffect(() => {
        dispatch(disableSidebar())

    }, [dispatch])

    let videoDeatils = getVideoDetails && getVideoDetails[0].description

    if (videoDeatils && videoDeatils.length > 200) {
        if (!showMore) {
            videoDeatils = videoDeatils.slice(0, 200) + '...'
        }
    }

    const handleLiked = async () => {
        if (id) {
            await likeVideo(id)
            setisChange(!isChange)
        }
    }
    const handleSubcriptions = async () => {
        if (getVideoDetails && getVideoDetails[0].postedBy._id) {
            await subscriptions(getVideoDetails[0].postedBy._id)
            setisChange(!isChange)
        }
    }


    return (
        <>
            {getVideoDetails && <div className='lg:grid lg:grid-cols-5 w-[90%]  lg:w-[85%] md:w-[90%] mx-auto mt-10 lg:gap-5 '>
                {/* left */}
                <div className="lg:col-span-3 lg:flex lg:flex-col">
                    {/* video  */}

                    <video width="100%" height="400px" src={getVideoDetails[0].video} controls={true} />



                    <h1 className="font-semibold mt-4">{getVideoDetails[0].title}</h1>

                    {/* profile details */}
                    <div className="lg:flex md:flex items-center mt-4">
                        <div className="flex items-center">
                            <img className='h-10 w-10 rouded-full object-cover' src={getVideoDetails[0].postedBy.img} alt="profile" />
                            <div className="ml-4">
                                <h1 className="font-semibold">{getVideoDetails[0].postedBy.username}</h1>
                                <p className="text-sm">{getVideoDetails[0].postedBy.subscripers} subscribers</p>
                            </div>


                            <div onClick={handleSubcriptions} className="lg:ml-4 md:ml-4 ml-auto py-2 px-3 flex hover:bg-gray-200 bg-gray-100  items-center rounded-2xl">
                                <TbBellRingingFilled size={20} />
                                <h1 className='ml-2'>Subscriped</h1>
                            </div>

                        </div>

                        {/* like share more  */}
                        <div className="lg:ml-auto md:ml-auto mt-2">
                            <div className="flex">


                                <div onClick={handleLiked} className="flex items-center py-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-l-2xl">
                                    {user && user._id && (getVideoDetails[0].likedBy.includes(user._id)) ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
                                    <p className='ml-2'>{getVideoDetails[0].likes}</p>
                                </div>

                                <div onClick={handleLiked} className="flex items-center py-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-r-2xl">
                                    {user && user._id && (getVideoDetails[0].dislikedBy.includes(user._id)) ? <AiFillDislike size={20} /> : <AiOutlineDislike size={20} />}
                                    <p className='ml-2'>{getVideoDetails[0].dislikes}</p>
                                </div>

                                <div className="ml-5">

                                    <div className="flex items-center py-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-2xl">
                                        <RiShareForwardLine size={20} />
                                        <p className='ml-2'>Share</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    {/* video details */}
                    <div className="mt-4 p-2 bg-gray-200 rounded-lg">
                        <p className='text-sm'>
                            {videoDeatils}
                        </p>
                        <h1 className='font-semibold mt-2 cursor-pointer' onClick={() => setshowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</h1>

                    </div>

                    <div className=" lg:hidden w-full flex flex-col gap-5">
                        <h1 className="font-semibold  mt-8 md:mt-8 lg:mt-0">Recommended Videos</h1>

                        {getRecommendVideoDetails && getRecommendVideoDetails.map((video) => (<RecomandedVideoCard videoData={video} key={video._id} />))}

                    </div>





                    {/* comments */}
                    <div className="mt-4">
                        <h1 className="font-semibold mb-4">Comments</h1>

                        <Comments comments={getVideoDetails[0].commentDetails} />

                    </div>





                </div>

                {/* right */}
                <div className="hidden lg:flex lg:col-span-2 w-full  lg:flex-col gap-5">
                    <h1 className="font-semibold  mt-8 md:mt-8 lg:mt-0">Recommended Videos</h1>

                    {getRecommendVideoDetails && getRecommendVideoDetails.map((video) => (<RecomandedVideoCard videoData={video} key={video._id} />))}

                </div>

            </div>}
        </>
    )
}

export default Details
