import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { UserState } from '../../types/User';
import { setCookieToken } from '../../Utils/Token';

interface UserProps {
    email: string
    password: string
}

export const UserLogin = createAsyncThunk('user/fetchUser', async (data: UserProps) => {


    try {
        const results = await axios({
            method: 'Post',
            url: 'user/login',
            headers: {
                'Content-Type': 'application/json',
            },
            data
        })
        if (results.data.token) {
            setCookieToken(results.data.token)
        }
        return results.data

    } catch (error: any) {
        alert(error.response.data.message)
        console.log(error)

    }
})




const initialState: UserState = {
    user: {},
    loading: false,
    error: '',
    token: null

}

const UserSlicer = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogout: (state) => {
            state.user = {}
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(UserLogin.pending, (state) => {
            state.loading = true
        })
        builder.addCase(UserLogin.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.token = action.payload.token
            state.error = null
        })
        builder.addCase(UserLogin.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
});

export const { userLogout } = UserSlicer.actions


export default UserSlicer.reducer