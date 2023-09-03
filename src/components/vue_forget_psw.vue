<template>
    <div class="forget_psw">
        <button id="to_change_psw" v-on:click="button_reverse">忘记密码</button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'vue_forget_psw',
    methods: {
        // this.$parent.panel_current = this.$parent.panel_current === 'login_register' ? 'new_psw' : 'login_register';
        // event.target.innerText = this.$parent.panel_current === 'login_register' ? "忘记密码" : "返回登陆"
        // this.$bus.$emit('button_reverse',event)
        // this.$store.commit('button_reverse',event)
        ...mapMutations(['button_reverse'])
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