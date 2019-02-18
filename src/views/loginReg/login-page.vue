<template>
    <div class="login-page">
        <router-link to="/" class="logo">
            <img src="./../../assets/logo.png" alt="">
        </router-link>
        <van-cell-group>
            <van-field
                label="手机号"
                left-icon="phone"
                v-model="user"
                clearable
            />
            <van-field
                label="密码"
                type="password"
                left-icon="lock"
                v-model="pwd"
                clearable
            />
        </van-cell-group>

        <van-button class="btn" type="primary" block @click="handleLogin" >登陆</van-button>

        <div class="others clearfix">
            <router-link to="/reg" class="fl">还没有账号？</router-link>
            <router-link to="/forget" class="fr">忘记密码</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "login-page",
        data(){
            return {
                user: "",
                pwd:''
            }
        },
        mounted() {
            
        },
        methods: {
            handleLogin(){
                this.SUCCESS('登陆成功')
            }
        },
    }
</script>
<style lang="scss" scoped>
    .login-page {
        .logo {
            display: block;
            height: 100px;
            margin: 50px 0 30px;
            text-align: center;
            font-size: 0;
            img {
                height: 100%;
            }
        }
        .btn {
            width: 90%;
            margin: 50px auto 20px;
        }
        .others {
            width: 90%;
            margin: 0 auto;
        }
    }
</style>