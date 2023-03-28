import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import ThumbnailCard from '../Components/ThumbnailCard'
import { enableSidebar } from '../features/Slicer/SidebarSlicer'
import { getVideos } from '../features/Slicer/VideoSlilcer'
import { AppDispatch, RootState } from '../app/store'


interface Props {
    type: string
}

function Home({ type }: Props) {

    const dispatch = useDispatch<AppDispatch>()

    const { videos } = useSelector((state: RootState) => state.video)


    useEffect(() => {
        dispatch(enableSidebar())

    }, [dispatch])

    useEffect(() => {

        dispatch(getVideos(type))
    }, [type, dispatch])

    return (
        <div className='w-full p-4 lg:p-8 grid grid:1  lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {(videos && videos.length > 0) && videos?.map((video) => (
                <ThumbnailCard videoData={video} key={video._id} />
            ))}

        </div>
    )
}

export default Home
