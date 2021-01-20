import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vue.Store({
    //状态
    state: {
        isLogined: false,
        username:'',
        token:''
    },
    //改变状态，只能同步
    mutations: {
        setToken(state, payload) {
            state.token = payload.token
        }
    },
    //可异步执行完再改变状态
    actions: {
        login({commit},loginData){
            commit('setToken',loginData);
        }
    },
    //重新封装需要的状态
    getters: {
        username:state=>state.username+'测试'
    }

})

export default store