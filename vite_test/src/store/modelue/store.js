import { login } from "../../api/api";
// import cookie from "cookie_js"
import { getToken,setToken } from "../../utils/tokenAuth";

const store = {
    namespaced:true,
    state(){
        return {
            user:{},
            changeLoginState:true,
            useState:true,
            dataInfo:[],
            token:getToken(),
            userInfo:{},
        }
    },
    mutations:{
        changeState(state){
            return state.useState = true;
        },
        userInfo(state,form){
            state.user = form
        },
        set_Token(state,value){
            state.token = value
            // setToken(state.token)
        },
    },
    getters:{
        isLogin(state){
            let retn = false
            if(state.token != null && Date.now() < state.token.expires_at * 1000){
                retn = true
            }
            return retn
        },
    },
    actions:{
        login({commit}, form){
            return new Promise((resolve,reject) => {
                login(form).then((res) => {
                    const expires_at = Math.floor(Date.now() / 1000)
                    // tokenTime = expires_at
                    console.log(res)
                    commit('userInfo', form);
                    if (res.data.status == 200) {             
                        console.log('登录成功');
                        commit('set_Token',res.data.data.token)
                        // window.localStorage['token'] = JSON.stringify(res.data.data.token)
                        resolve()
                        return true;
                    } else {               
                        console.log('登录失败');
                        return false;
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        },
    }
}

export default store