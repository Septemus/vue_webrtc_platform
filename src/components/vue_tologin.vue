<template>
    <div class="con-box left col-sm-6"
        v-bind:class="{'hidden1':this.$parent.form_box_current==='login'||this.$parent.panel_current==='new_psw'}">
        <vue_welcome></vue_welcome>
        <p>已有账号</p>
        <button id="tologin" @click="tologin_">去登录</button>
    </div>
</template>
<script>
import vue_welcome from './vue_welcome'

    export default {
        name: 'vue_tologin',
        methods: {
            tologin_: function () {
                console.log('to login')
                this.$parent.form_box_current = 'login'
                let form_box = document.getElementsByClassName('form-box')[0];
                form_box.style.transform = window.innerWidth > 568 ? 'translateX(0%)' : "translateY(0%)";
            }
        },
        components: {
            vue_welcome
        }
    }
</script>