export interface User {
    _id?: string
    username?: string
    email?: string
    img?: string
    subscripers?: number
    subscribtions?: []
    createdAt?: string
}

export interface UserState {
    user?: User
    loading: boolean
    error?: string | null
    token?: string | null
}



