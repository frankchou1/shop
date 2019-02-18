<template>
    <div class="err-page">
        <header>404</header>
        <div>找不到网页</div>
        <router-link to="/" tag="a">回到首页</router-link>
    </div>
</template>
<script>
    export default {
        name: "page404",
        data(){
            return {
                user: "",
                pwd:''
            }
        },
        mounted() {
            
        },
        methods: {
            
        },
    }
</script>
<style lang="scss" scoped>
.err-page {
    text-align: center;
}
    header {
        margin: 30vh 0 0;
        font-size: 80px;
        font-weight: bold;
    }
    div {
        font-size: 40px;
    }
    a {
        font-size: 16px;
    }
</style>