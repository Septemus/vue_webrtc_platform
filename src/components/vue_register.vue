<template>
    <div class="register-box"
        v-bind:class="{'hidden':this.$parent.form_box_current==='login'||this.$parent.panel_current==='new_psw'}">

        <h1>register</h1>
        <input type="text" placeholder="用户名" id="Rid" v-model="vue_rid">
        <input type="text" placeholder="昵称" id="Rname" v-model="vue_rname">
        <div class="psw1">
            <input type="password" placeholder="密码" id="Rpassword" v-model="vue_rpsw">
            <div class="alert format_correct"
                :class="[f_correct?'text-success':'text-danger',f_correct?'alert-success':'alert-danger']">
                {{notice_below_psw}}</div>
        </div>
        <div class="psw1">
            <input type="password" placeholder="确认密码" v-model="vue_rpsw1">
            <div class="alert format_correct"
                :class="[f_same?'text-success':'text-danger',f_same?'alert-success':'alert-danger']">
                {{notice_below_repsw}}</div>
        </div>
        <button id="register" @click="register_">注册</button>
    </div>
</template>
<script>
    export default {
        name:'vue_register',
        props: {
            ip:String
        },
        data() {
            return {
                vue_rid: '',
                vue_rname: '',
                vue_rpsw: '',
                vue_rpsw1: '',
                f_correct: true,
                f_same: true
            }
        },
        methods: {
            register_: function (event) {
                var params = "id=" + this.vue_rid + "&password=" + this.vue_rpsw + "&name=" + this.vue_rname;
                fetch('http://' + this.ip + ':3007/api/reguser',{
                    type: 'post',
                    contentType: 'application/x-www-form-urlencoded',
                    data: params
                }).then(
                    function (result) {
                        if (result.status === 0) {
                            alert("注册成功,点击回到登陆界面");
                            window.location.href = result.url;
                        }
                        else {
                            alert(result.message);
                        }
                    }

                ).catch(err => {
                    alert("注册失败！" + err)
                    console.log(err)
                })
            },
        },
        computed: {
            notice_below_psw() {
                return this.f_correct ? "格式正确" : "至少8个字符，至少1个字母，1个数字和1个特殊字符"
            },
            notice_below_repsw() {
                return this.f_same ? "两次输入一致" : "两次输入不一致！"
            }
        },
        watch: {
            vue_rpsw: {
                immediate: true,
                handler(new_val, old_val) {
                    // console.log(new_val)
                    if (!new_val.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)) {
                        // console.log("不符合")
                        this.f_correct = false
                    }
                    else {
                        this.f_correct = true
                    }
                    if (new_val !== this.vue_rpsw1) {
                        // console.log("不符合")
                        this.f_same = false
                    }
                    else {
                        this.f_same = true
                    }
                }
            },
            vue_rpsw1: {
                immediate: false,
                handler(new_val, old_val) {
                    // console.log(new_val)
                    if (new_val !== this.vue_rpsw) {
                        // console.log("不符合")
                        this.f_same = false
                    }
                    else {
                        this.f_same = true
                    }
                }
            }
        }


    }
</script>
<style scoped>
.psw1 {
    width:100%;
    display: flex;
    justify-content: center;
    position: relative;
}
.format_correct {
    position: absolute;
    /* color: ; */
    background-color: transparent;
    left: 15%;
    top:38px;
    font-size: 8px;
    width: 70%;
    height: 22px;
    line-height: 16px;
    padding: 2px 5px;
}
</style>