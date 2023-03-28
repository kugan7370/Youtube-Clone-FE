import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Videos } from '../../types/Video'
import axios from 'axios'

export const getVideos = createAsyncThunk('VideoSlilcer/getVideos', async (type: string) => {
    try {
        const getVideo = await axios({
            method: 'GET',
            url: `/video/${type}`,
            headers: {
                'Content-Type': 'application/json',
            },
        })


        return getVideo.data.video

    } catch (error) {
        console.log(error)
    }


})
export const getVideoById = async (id: string) => {
    try {
        const getVideo = await axios({
            method: 'GET',
            url: `/video/get/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        })


        return getVideo.data.video

    } catch (error) {
        console.log(error)
    }


}







interface initialProps {
    videos: Videos[],
    loading: boolean,
    error?: string

}


const initialState: initialProps = {
    videos: [],
    loading: false,
    error: ''


}

const VideoSlilcer = createSlice({
    name: "VideoSlicer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVideos.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getVideos.fulfilled, (state, action) => {
            state.videos = action.payload
            state.loading = false
        })
        builder.addCase(getVideos.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

    }
});

// export const { } = VideoSlilcer.actions

export default VideoSlilcer.reducer