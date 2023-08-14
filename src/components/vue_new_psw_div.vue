<template>
    <div class="new_psw_div" v-bind:class="{ 'hidden': this.$parent.panel_current === 'login_register' }">
        <h1>找回密码</h1>
        <div class="inputgroup1">
            <input type="text" placeholder="邮箱地址" name="id" id="email">
            <button class="" type="submit">发送验证邮件</button>
        </div>
        <input type="text" placeholder="验证码" name="id" id="verify">
        <input type="password" placeholder="新密码" name="password" id="epassword1">
        <input type="password" placeholder="确认新密码" name="password" id="epassword2">
        <!--<a href="b.html"><input type="button" name="test" value="test" /></a>-->
        <!--<input type="button" value="登陆" id="login_btn">-->
        <button id="alter_psw">修改密码</button>
    </div>
</template>
<script>
export default {
    name: 'vue_new_psw_div'
}
</script>
<style lang="less" scoped>
.new_psw_div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    /* 弹性布局 垂直排列 居中 */
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px 15px rgba(0, 0, 0, 0.6);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* 绝对定位 居中 */
    /* position: absolute; */
    /* top: 50%; */
    /* transform: translateY(-50%); */
    opacity: 1;
    transition: visibility 0.5s, opacity 0.5s;

    .inputgroup1 {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
            width: 80%;
        };
        button {
            width: 20%;
            // padding: 5px 0;
            height: 27px;
            font-size: 10px;
        }

    }

}
</style>