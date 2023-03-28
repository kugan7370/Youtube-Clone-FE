import { createSlice } from '@reduxjs/toolkit'




interface initialProps {
    showSidebar: boolean

}


const initialState: initialProps = {
    showSidebar: false

}

const VideoSlilcer = createSlice({
    name: "VideoSlicer",
    initialState,
    reducers: {
        enableSidebar: (state) => {
            state.showSidebar = true
        },
        disableSidebar: (state) => {
            state.showSidebar = false
        },
        toggleSidebar: (state) => {
            state.showSidebar = !state.showSidebar
        }

    },

});

export const { enableSidebar, disableSidebar, toggleSidebar } = VideoSlilcer.actions

export default VideoSlilcer.reducer