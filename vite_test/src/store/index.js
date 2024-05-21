import { createStore } from "vuex";
import loginUser from './modelue/loginUser'
import store from './modelue/store'
// import createPersistedState from "vuex-persistedstate"

const Store = createStore({
    modules:{
        store,
        loginUser
    },
    // getters:{
    //     isLogin:state => {
    //         return state.loginUser.isLogined
    //     }
    // },
    // plugins:[createPersistedState({
    //     key:'store',
    //     storage:window.localStorage,
    // })]
})

export default Store