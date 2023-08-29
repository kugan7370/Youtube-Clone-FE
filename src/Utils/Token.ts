export const setCookieToken = (token: string) => {
    //expires in 1 day
    const date = new Date()
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000))
    const expires = `expires=${date.toUTCString()}`

    document.cookie = `access_token=${token}; Secure; SameSite=None; ${expires};`
}







