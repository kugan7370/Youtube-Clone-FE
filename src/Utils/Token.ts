


export const setCookieToken = (token: string) => {
    const expirationDate = new Date(Date.now() + 86400000);
    document.cookie = `access_token=${token} Secure; SameSite=None; domain=${process.env.REACT_APP_DOMAIN}; path=/ ; expires=${expirationDate.toUTCString()}`
}







