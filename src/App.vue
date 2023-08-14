<template>
    <div class="app">
        <vue_time></vue_time>
        <div class="container">
            <div class="form-box" v-bind:class="{ 'hidden': panel_current === 'new_psw' }">
                <vue_register :ip="app_ip"></vue_register>
                <!-- 登录 -->
                <vue_login :ip="app_ip"></vue_login>
            </div>
            <div class="row con_row">
                <vue_tologin></vue_tologin>
                <vue_toregister></vue_toregister>
            </div>
            <vue_new_psw_div></vue_new_psw_div>
        </div>
        <vue_forget_psw></vue_forget_psw>
    </div>
</template>

<script>
// import './assets/js/bootstrap.min.js'
import app_ip from './assets/js/ipfetch.js'
import vue_forget_psw from './components/vue_forget_psw'
import vue_new_psw_div from './components/vue_new_psw_div'
import vue_time from './components/vue_time'
import vue_register from './components/vue_register'
import vue_login from './components/vue_login'
import vue_tologin from './components/vue_tologin'
import vue_toregister from './components/vue_toregister'

export default {
    name: 'App1',
    data() {
        return {
            form_box_current: 'login',
            panel_current: 'login_register',
            app_ip
        }
    },
    components: {
        vue_forget_psw, vue_new_psw_div, vue_time, vue_register, vue_login, vue_tologin, vue_toregister
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
}

.hidden {
    opacity: 0 !important;
    display: none !important;
    /* transition: 0.5s; */
}

.hidden1 {
    visibility: hidden;
    opacity: 0 !important;
    /* transition: 0.5s; */
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
</style>
