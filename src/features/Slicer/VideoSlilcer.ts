import axios from 'axios'

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


