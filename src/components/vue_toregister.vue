<template>
    <div class="con-box right col-sm-6"
        v-bind:class="{ 'hidden1': this.$parent.form_box_current === 'register' || this.$parent.panel_current === 'new_psw' }">
        <vue_welcome></vue_welcome>
        <p>没有账号？</p>
        <button id="toregister" @click="toregister_">去注册</button>
    </div>
</template>
<script>
import vue_welcome from './vue_welcome'

export default {
    name: 'vue_toregister',
    methods: {
        toregister_: function () {
            console.log('to reg')
            this.$parent.form_box_current = 'register'
            let form_box = document.getElementsByClassName('form-box')[0];
            form_box.style.transform = window.innerWidth > 568 ? 'translateX(100%)' : "translateY(100%)";
        }
    },
    components: {
        vue_welcome
    }

}
</script>