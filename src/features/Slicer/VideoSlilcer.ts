import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CommentProps } from '../../types/Video'



export const getVideos = async (type: string) => {
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
}



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

export const viewVideo = async (id: string) => {
    try {
        await axios({
            method: 'PUT',
            url: `/video/view/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    catch (error) {
        console.log(error)
    }
}


export const likeVideo = async (id: string) => {
    try {
        await axios({
            method: 'PUT',
            url: `/video/like/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    catch (error) {
        console.log(error)
    }
}
export const disLikeVideo = async (id: string) => {
    try {
        await axios({
            method: 'PUT',
            url: `/video/dislike/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    catch (error) {
        console.log(error)
    }
}
export const getRecommendedvideos = async (id: string) => {
    try {
        const getVideo = await axios({
            method: 'get',
            url: `/video/get-recommended/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return getVideo.data.video
    }
    catch (error) {
        console.log(error)
    }
}
export const addComment = async (data: CommentProps) => {
    try {
        const getVideo = await axios({
            method: 'post',
            url: `/comment/addComment`,
            headers: {
                'Content-Type': 'application/json',
            },
            data
        })
        return getVideo.data.video
    }
    catch (error) {
        console.log(error)
    }
}

export const getLikedVideoId = createAsyncThunk('video/getLikedVideoId', async (id: string) => {
    try {
        const getVideo = await axios({
            method: 'get',
            url: `/video/get-liked-userId/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return getVideo.data.video
    }
    catch (error) {
        console.log(error)
    }
}
)

export const getDislikedVideoId = createAsyncThunk('video/getDislikedVideoId', async (id: string) => {
    try {
        const getVideo = await axios({
            method: 'get',
            url: `/video/get-disliked-userId/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return getVideo.data.video
    }
    catch (error) {
        console.log(error)
    }
}
)
export const getSubscribedUserId = createAsyncThunk('video/getSubscribedUsers', async (id: string) => {
    try {
        const getVideo = await axios({
            method: 'get',
            url: `/video/get-subscribtion-ids/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return getVideo.data.video
    }
    catch (error) {
        console.log(error)
    }
}
)

interface videoState {
    likeVideo: string[]
    dislikeVideo: string[]
    subscribeUser: string[]
}



const initialState: videoState = {
    likeVideo: [],
    dislikeVideo: [],
    subscribeUser: []

}

const VideoSlilcer = createSlice({
    name: 'video',
    initialState,
    reducers: {
        handleLikeVideo: (state, action) => {
            if (state.likeVideo.includes(action.payload)) {
                state.likeVideo = state.likeVideo.filter((id) => id !== action.payload)
            }
            else {
                if (state.dislikeVideo.includes(action.payload)) {
                    state.dislikeVideo = state.dislikeVideo.filter((id) => id !== action.payload)
                }
                state.likeVideo.push(action.payload)
            }
        },
        handleDislikeVideo: (state, action) => {
            if (state.dislikeVideo.includes(action.payload)) {
                state.dislikeVideo = state.dislikeVideo.filter((id) => id !== action.payload)
            }
            else {
                if (state.likeVideo.includes(action.payload)) {
                    state.likeVideo = state.likeVideo.filter((id) => id !== action.payload)
                }
                state.dislikeVideo.push(action.payload)
            }
        },
        handleSubscribeUser: (state, action) => {
            if (state.subscribeUser.includes(action.payload)) {
                state.subscribeUser = state.subscribeUser.filter((id) => id !== action.payload)
            }
            else {
                state.subscribeUser.push(action.payload)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getLikedVideoId.fulfilled, (state, action) => {
            state.likeVideo = action.payload
        })
        builder.addCase(getDislikedVideoId.fulfilled, (state, action) => {
            state.dislikeVideo = action.payload
        })
        builder.addCase(getSubscribedUserId.fulfilled, (state, action) => {
            state.subscribeUser = action.payload
        }
        )

    }

});

export const { handleLikeVideo, handleDislikeVideo, handleSubscribeUser } = VideoSlilcer.actions

export default VideoSlilcer.reducer
