import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ThumbnailCard from '../Components/ThumbnailCard'
import { enableSidebar } from '../features/Slicer/SidebarSlicer'
import { getVideos } from '../features/Slicer/VideoSlilcer'
import { AppDispatch } from '../app/store'
import { HomeVideos } from '../types/Video'


interface Props {
    type: string
}

function Home({ type }: Props) {

    const dispatch = useDispatch<AppDispatch>()
    const [getVideo, setgetVideo] = useState<HomeVideos[]>()

    useEffect(() => {
        dispatch(enableSidebar())

    }, [dispatch])

    useEffect(() => {
        (async () => {
            const Videos = await getVideos(type)
            setgetVideo(Videos)
        })()


    }, [type, dispatch])

    return (
        <div className='w-full p-4 lg:p-8 grid grid:1  lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {(getVideo && getVideo.length > 0) && getVideo?.map((video) => (
                <ThumbnailCard videoData={video} key={video._id} />
            ))}

        </div>
    )
}

export default Home
