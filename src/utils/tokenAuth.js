const token = 'token'

export function getToken(){
    const tokenStr = window.localStorage.getItem('token')
    if(!tokenStr ) return null
    // if(Date.now() - Store.state.store.tokenTime *1000 > 500){
    //     window.localStorage.removeItem(token)
    //     return null
    // }
    return tokenStr
}

export function setToken(tokenResult){
    return localStorage.setItem(token,JSON.stringify(tokenResult))
}