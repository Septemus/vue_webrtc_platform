<template>
    <div class="login-box"
        v-bind:class="{'hidden':this.$parent.form_box_current==='register'||this.$parent.panel_current==='new_psw'}">
        <h1>login</h1>
        <input type="text" placeholder="用户名" name="id" v-model="vue_id">
        <input type="password" placeholder="密码" name="password" id="password" @keyup.enter="login_($event)"
            v-model="vue_psw">
        <button id="login_btn" @click="login_($event)">登陆</button>
    </div>
</template>
<script>
    export default {
        name: 'vue_login',
        props: {
            ip: String
        },
        data() {
            return {
                vue_id: '',
                vue_psw: '',
            }
        },
        methods: {
            login_: function (event) {
                var params = 'id=' + this.vue_id + '&password=' + this.vue_psw;
                fetch(
                    'http://' + this.ip + ':3007/api/login',

                    {
                        type: 'post',
                        contentType: 'application/x-www-form-urlencoded',
                        data: params,
                    }).then(
                        function (result) {
                            window.localStorage.setItem(result.id, result.id);
                            window.localStorage.setItem('serverIP', result.serverIP)
                            sessionStorage.name = result.name;
                            sessionStorage.id = result.id;
                            sessionStorage.serverIP = result.serverIP;
                            if (result.status === 0) {
                                alert("登录成功,跳转至主界面");
                                window.location.href = result.url;
                            }
                            else
                                alert(result.message);
                        }
                    )
                    .catch(err => {
                        alert("登陆失败！" + err)
                        console.log(err)
                    })
            },
        }
    }

</script>