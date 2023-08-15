<template>
    <div class="app">
        <vue_time></vue_time>
        <div class="container">

            <div class="form-box" v-hide=" panel_current === 'new_psw' " ref="formbox">
                <transition name="trans">
                    <vue_register :key="1" :ip="app_ip" v-show="form_box_current === 'register' && panel_current === 'login_register'">
                    </vue_register>
                </transition>
                <transition name="trans">
                    <vue_login :key="2" :ip="app_ip" v-show="form_box_current === 'login'&&panel_current === 'login_register'">
                    </vue_login>
                </transition>
            </div>
            <div class="row con_row">
                <vue_conbox v-hide="form_box_current === 'login' || panel_current === 'new_psw'" :movement="tologin_">
                    <span slot="p_notice"> 已有账号？ </span>
                    <span slot="b_notice"> 去登陆 </span>
                </vue_conbox>
                <vue_conbox v-hide="form_box_current === 'register' || panel_current === 'new_psw'" :movement="toregister_">
                    <span slot="p_notice"> 没有账号？ </span>
                    <span slot="b_notice"> 去注册 </span>
                </vue_conbox>
            </div>
            <transition name="tg" v-show="panel_current==='new_psw'">
                <vue_new_psw_div v-show="panel_current==='new_psw'">
                </vue_new_psw_div>
            </transition>
        </div>
        <vue_forget_psw></vue_forget_psw>
    </div>
</template>

<script>
import app_ip from './assets/js/ipfetch.js'
import vue_forget_psw from './components/vue_forget_psw'
import vue_new_psw_div from './components/vue_new_psw_div'
import vue_time from './components/vue_time'
import vue_register from './components/vue_register'
import vue_login from './components/vue_login'
import vue_conbox from './components/vue_conbox'
import {mapState,mapGetters} from 'vuex'
export default {
    name: 'App1',
    data() {
        return {
            // form_box_current: 'login',
            // panel_current: 'login_register',
            app_ip
        }
    },
    computed: {
        ...mapState(['form_box_current','panel_current']),
        ...mapGetters(['my_panel_current'])
    },
    methods:{
        tologin_(){
            //this.form_box_current = 'login'
            // let form_box = document.getElementsByClassName('form-box')[0];
            this.$store.commit('form_box_switch','login')
            this.$refs.formbox.style.transform = window.innerWidth > 568 ? 'translateX(0%)' : "translateY(0%)";
        },
        toregister_(){
            // this.form_box_current = 'register'
            // let form_box = document.getElementsByClassName('form-box')[0];
            this.$store.commit('form_box_switch','register')
            this.$refs.formbox.style.transform = window.innerWidth > 568 ? 'translateX(100%)' : "translateY(100%)";
        }
    },
    components: {
        vue_forget_psw, vue_new_psw_div, vue_time, vue_register, vue_login, vue_conbox
    },
    mounted() {
        // this.$bus.$on('button_reverse',(event)=>{
        //     this.panel_current = this.panel_current === 'login_register' ? 'new_psw' : 'login_register';
        //     event.target.innerText = this.panel_current === 'login_register' ? "忘记密码" : "返回登陆"
        // })
        console.log(this.my_panel_current)
    },
    directives: {
        hide(elem,binding){
            if(binding.value){
                elem.style.visibility='hidden'
                elem.style.opacity=0
            }
            else {
                elem.style.visibility='visible'
                elem.style.opacity=1
            }
        }
    }
}
</script>

<style lang="less">
* {
    /* 初始化 */
    margin: 0;
    padding: 0;
}

html {
    width: 100%;
    height: 100%;
}

body {
    /* 100%窗口高度 */
    height: 100%;
    width: 100%;
}

.app {
    height: 100%;
    width: 100%;
    background-image: url(./assets/images/scifi_bg.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    background-color: rgba(0, 0, 0, 0.5);
    color: #f6f6f6;
    outline: none;
    border: none;

    &:hover{
        background-color: rgba(233, 233, 233, 0.7);
        color: rgba(0, 0, 0, 0.8);
        transition: background-color 0.5s ease;
    }
}



.container {
    background-color: rgba(0, 0, 0, 0.1);
    max-width: 700px;
    min-height: 500px;
    max-height: 80%;
    border-radius: 5px;
    /* 阴影 */
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    /* 相对定位 */
    position: relative;
    display: flex;
}

.form-box {
    /* 绝对定位 */
    /* visibility: hidden; */
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0.3);
    width: 50%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    /* 动画过渡 加速后减速 */
    transition: 0.5s ease-in-out;
    button {
        width: 70%;
        margin-top: 10px;
        /* background-color: rgba(233,233,233,0.7); */
        /* background-color: rgba(0,0,0,0.5); */

        outline: none;
        border-radius: 8px;
        padding: 13px;
        /* color: rgba(0,0,0,0.8); */
        /* color: #f6f6f6; */

        letter-spacing: 2px;
        border: none;
        cursor: pointer;
    }
    @media screen and (max-width:576px) {
        width: 100%;
        height: 50%;
    }

    
}


.register-box,
.login-box {
    height: 100%;
    /* 弹性布局 垂直排列 */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: absolute;
}

.trans-enter-active {
    animation: showup .5s ease;
}

.trans-leave-active {
    animation: showup .5s ease reverse;
}

@keyframes showup {
    from {
        opacity: 0;
        // position: absolute;
    }
    to {
        opacity: 1;
        // position: relative;
    }
}



h1 {
    text-align: center;
    margin-top: 5px;
    /* 大写 */
    text-transform: uppercase;
    color: #fff;
    /* 字间距 */
    letter-spacing: 5px;
}

input {
    background-color: transparent;
    width: 70%;
    color: #fff;
    border: none;
    /* 下边框样式 */
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding: 3px 0;
    text-indent: 10px;
    margin: 8px 0;
    font-size: 14px;
    letter-spacing: 2px;
}

input::placeholder {
    color: #fff;
}

input:focus {
    /* color: #a262ad; */
    box-shadow: 3px 3px 15px 10px rgba(255, 255, 255, 0.4);
    outline: none;
    /* border-bottom: 1px solid #a262ad80; */
    transition: 0.5s;
}

input:focus::placeholder {
    opacity: 0;
}



.con_row {
    flex-grow: 1;
    /* height: 100%; */
}

.con-box {
    /* width: 50%; */
    height: 100%;
    padding: 10px;
    /* 弹性布局 垂直排列 居中 */
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: visibility 0.5s, opacity 0.5s;

    @media screen and (max-width:576px) {
        height: 50% !important;
    }
    .welcome {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
    h2 {
        margin-top: 20px;
        color: rgba(250, 250, 250, 0.5);
        font-size: 25px;
        font-weight: bold;
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 4px;
    }

    p {
        font-size: 12px;
        letter-spacing: 2px;
        color: rgba(250, 250, 250, 0.5);
        text-align: center;
    }

    span {
        color: #ffffff;
    }

    img {
        width: 150px;
        height: 150px;
        opacity: 0.9;
        margin: 5px 0;
        display: block;

        @media screen and (max-width:576px) {
            width: 100px;
            height: 100px;
        }
    }

    button {
        margin-top: 3px;
        /* background-color: #fff;
    color: #a262ad; */
        /* border: 1px solid #d3b7d8; */
        padding: 6px 10px;
        border-radius: 5px;
        letter-spacing: 1px;
        outline: none;
        cursor: pointer;
    }

}
.tg-enter-active {
    animation: anime 1s ease;
}
.tg-leave-active {
    animation: anime 1s ease reverse;
}

@keyframes anime {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
