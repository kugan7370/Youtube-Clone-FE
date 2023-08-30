// export const setCookieToken = (token: string) => {
//     //expires in 1 day
//     const date = new Date()
//     date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000))
//     const expires = `expires=${date.toUTCString()}`

//     document.cookie = `access_token=${token}; Secure; SameSite=None; ${expires};`
// }


export const getToken = () => {
  return localStorage.getItem('acces_token');
};

export const setToken = async (token: string) => {
  await localStorage.setItem('acces_token', token);
}
export const clearToken = () => {
  localStorage.removeItem('acces_token');
};




