//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
const actions = {
    // button_reverse(context, event) {
    //     context.commit('button_reverse', event)

    // }
}
//准备mutations对象——修改state中的数据
const mutations = {
    button_reverse(state,event) {
        state.panel_current = state.panel_current === 'login_register' ? 'new_psw' : 'login_register';
        event.target.innerText = state.panel_current === 'login_register' ? "忘记密码" : "返回登陆"
    },
    form_box_switch(state,target) {
        state.form_box_current=target
    }
}
//准备state对象——保存具体的数据
const state = {
    panel_current: 'login_register',
    form_box_current:'login'

}

const getters= {
    my_panel_current(state){
        return state.panel_current+':my'
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})