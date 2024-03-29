import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { Host } from '../../Utils/host';
import { getToken } from '../../Utils/Token';


export const getCommentByVideoId = createAsyncThunk('comment/getComments', async (id: string) => {
    try {
        const getVideo = await axios({
            method: 'get',
            url: `${Host}/comment/getCommentByVideoId/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${await getToken()}`

            },
        })
        return getVideo.data.comment
    }
    catch (error) {
        console.log(error)
    }
}
)





const initialState = {
    comments: []

}

const CommentSlicer = createSlice({
    name: "comment",
    initialState,
    reducers: {
        clearComment: (state) => {
            state.comments = []
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getCommentByVideoId.fulfilled, (state, action) => {
            state.comments = action.payload
        })
    }
});

export const { clearComment } = CommentSlicer.actions

export default CommentSlicer.reducer