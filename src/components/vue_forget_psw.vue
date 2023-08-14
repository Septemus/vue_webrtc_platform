<template>
    <div class="forget_psw">
        <button id="to_change_psw" v-on:click="button_reverse">忘记密码</button>
    </div>
</template>
<script>
export default {
    name: 'vue_forget_psw',
    methods: {
        button_reverse: function (event) {
            this.$parent.panel_current = this.$parent.panel_current === 'login_register' ? 'new_psw' : 'login_register';
            event.target.innerText = this.$parent.panel_current === 'login_register' ? "忘记密码" : "返回登陆"
        },
    }
}

</script>
<style scoped>
.forget_psw {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 20px;
}
</style>