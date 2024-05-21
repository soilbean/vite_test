import request from '../utils/axios'

export function login(params){
    return request({
        url:'/logins',
        method:'post',
        params
    })
}

export function userInfo(params){
    return request({
        url:'/userInfo',
        method:'post',
        params
    })
}

export function AIAsk(e){
    return request({
        url:'/AIuse/AIask',
        method:'get',
        params:e
    })
}
export function GetRouteList(e){
    return request({
        url:'/getRoutes/getRouteList',
        method:'get',
        params:e
    })
}