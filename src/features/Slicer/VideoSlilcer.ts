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


