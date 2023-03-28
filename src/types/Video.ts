export interface Videos {
    _id: string
    title: string
    description: string
    video: string
    thumbnail: string
    views: number
    likes: number
    likedBy: string[]
    dislikes: number
    dislikedBy: string[]
    category: string
    tags: string[]
    createdAt: string
    updatedAt: string
    __v: number
    postedBy: PostedBy
    commentDetails: CommentDetail[]
}

export interface PostedBy {
    _id: string
    username: string
    email: string
    img: string
    subscripers: number
    subscribtions: any[]
    createdAt: string
    updatedAt: string
    __v: number
}

export interface CommentDetail {
    _id: string
    comment: string
    userId: string
    videoId: string
    createdAt: string
    updatedAt: string
    __v: number
    username: string
    email: string
    img: string
}
