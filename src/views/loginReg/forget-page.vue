<template>
    <div class="forget-page">
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
                label="新密码"
                type="password"
                left-icon="lock"
                v-model="pwd"
                clearable
            />
            <van-field
                label="验证码"
                left-icon="coupon"
                v-model="yzm"
                clearable
            />
        </van-cell-group>

        <van-button class="btn" type="primary" block @click="handleFind" >找回密码</van-button>

        <div class="others">
            <router-link to="/login" class="fr">立即登陆</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "forget-page",
        data(){
            return {
                user: "",
                pwd:'',
                yzm:''
            }
        },
        mounted() {
            
        },
        methods: {
            handleFind(){
                this.SUCCESS('登陆成功')
            }
        },
    }
</script>
<style lang="scss" scoped>
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
</style>