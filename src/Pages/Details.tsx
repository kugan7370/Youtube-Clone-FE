import React, { useState } from 'react'
import RecomandedVideoCard from '../Components/RecomandedVideoCard'
import { TbBellRingingFilled } from 'react-icons/tb'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import Comments from '../Components/Comments'
const proImage = `https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB`

function Details() {
    const [showMore, setshowMore] = useState(false)

    let videoDeatils = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempora asperiores ad molestias. Et dolorem, rerum dolorum odit aut autem facere eius ipsam laborum quaerat, magnam minus dicta nisi libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempora asperiores ad molestias. Et dolorem, rerum dolorum odit aut autem facere eius ipsam laborum quaerat, magnam minus dicta nisi libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempora asperiores ad molestias. Et dolorem, rerum dolorum odit aut autem facere eius ipsam laborum quaerat, magnam minus dicta nisi libero.'

    if (videoDeatils.length > 200) {
        if (!showMore) {
            videoDeatils = videoDeatils.slice(0, 200) + '...'
        }
    }

    return (
        <div className='lg:grid lg:grid-cols-5 w-[90%]  lg:w-[85%] md:w-[90%] mx-auto mt-10 lg:gap-5 '>
            {/* left */}
            <div className="lg:col-span-3 lg:flex lg:flex-col">
                {/* video  */}
                <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube.com/embed/2g811Eo7K8U"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>


                <h1 className="font-semibold mt-4">React Video Sharing App UI Design | Youtube UI Clone with React</h1>

                {/* profile details */}
                <div className="lg:flex md:flex items-center mt-4">
                    <div className="flex items-center">
                        <img className='h-10 w-10 rouded-full object-cover' src={proImage} alt="profile" />
                        <div className="ml-4">
                            <h1 className="font-semibold">Clever Programmer</h1>
                            <p className="text-sm">1.3M subscribers</p>
                        </div>


                        <div className="lg:ml-4 md:ml-4 ml-auto py-2 px-3 flex hover:bg-gray-200 bg-gray-100  items-center rounded-2xl">
                            <TbBellRingingFilled size={20} />
                            <h1 className='ml-2'>Subscriped</h1>
                        </div>

                    </div>

                    {/* like share more  */}
                    <div className="lg:ml-auto md:ml-auto mt-2">
                        <div className="flex">
                            {/* <div className="lg:hidden md:hidden mr-4 flex items-center py-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-2xl">
                                <TbBellRingingFilled size={20} />
                                <h1 className='ml-2'>Subscriped</h1>
                            </div> */}

                            <div className="flex items-center py-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-l-2xl">
                                <AiOutlineLike size={20} />
                                <p className='ml-2'>1.8K</p>
                            </div>

                            <div className="flex items-center py-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-r-2xl">
                                <AiOutlineDislike size={20} />
                                <p className='ml-2'>5</p>
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

                    <RecomandedVideoCard />
                    <RecomandedVideoCard />
                    <RecomandedVideoCard />
                    <RecomandedVideoCard />
                    <RecomandedVideoCard />
                    <RecomandedVideoCard />
                    <RecomandedVideoCard />
                    <RecomandedVideoCard />
                    <RecomandedVideoCard />
                    <RecomandedVideoCard />
                </div>





                {/* comments */}
                <div className="mt-4">
                    <h1 className="font-semibold mb-4">Comments</h1>

                    <Comments />

                </div>





            </div>

            {/* right */}
            <div className="hidden lg:flex lg:col-span-2 w-full  lg:flex-col gap-5">
                <h1 className="font-semibold  mt-8 md:mt-8 lg:mt-0">Recommended Videos</h1>

                <RecomandedVideoCard />
                <RecomandedVideoCard />
                <RecomandedVideoCard />
                <RecomandedVideoCard />
                <RecomandedVideoCard />
                <RecomandedVideoCard />
                <RecomandedVideoCard />
                <RecomandedVideoCard />
                <RecomandedVideoCard />
                <RecomandedVideoCard />
            </div>

        </div>
    )
}

export default Details
