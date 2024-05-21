const loginUser = {
    namespaced:true,
    state:{
        data:{},
        isLogined:false
    },
    getters:{
        userInfo:state => {
            return state.data
        }
    },
    mutations:{
        // 设置用户信息
        setUserInfo(state,userInfo){
            state.data = userInfo,
            state.isLogined = true
        },
        // 清除用户信息
        clearUserInfo(state,info){
            state.data = info,
            state.isLogined = false
        },
        // 修改用户信息
        modifyUserInfo(state,newInfo){
            state.data = Object.assign(state.data,newInfo)
        }
    },
    actions:{
        saveInfo({commit},result){
            commit('setUserInfo',result)
        },
        logout({commit}){
            commit('clearUserInfo',{})
            location.href = '/login'
        }
    }
}
export default loginUser