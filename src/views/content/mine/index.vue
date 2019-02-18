<template>
    <div class="page-mine">

        <router-link class="info-bar" to="/infodetail">
            <div class="info-l">
                <div class="head">
                  <img src="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg" alt="">
                </div>
                <div class="info-c">
                  <div class="name">阿斯顿发放</div>
                  <div class="phone">321313</div>
                </div>
            </div>
            <div class="ico">
              <van-icon name="arrow" />
            </div>
        </router-link>

        <div class="buyserve-bar">
            <div>历史订单</div>
            <i class="line"></i>
            <div>物流</div>
            <i class="line"></i>
            <div>售后</div>
        </div>

        <div class="btns">
            <van-button plain block @click="signout">注销</van-button>
            <van-button plain block @click="$router.push('/aboutus')">关于我们</van-button>
        </div>
    </div>
</template>
<script>
  export default {
    name: "page-mine",
    data(){
      return {
        
      }
    },
    mounted() {
      
    },
    methods: {
      signout(){
        this.$router.push('/login')
      }
    },
  }
</script>
<style lang="scss" scoped>
  //@import ""
  .info-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px ;
    
    background: linear-gradient(to right,#1989fa ,#49a3fd);
    .info-l {
      display: flex;
      align-items: center;
      flex: 1;
      color: #fff;
      .head {
        position: relative;
        width: 25%;
        padding-top: 25%;
        margin-right: 15px;
        border-radius: 50%;
        overflow: hidden;
        img {
          position: absolute;
          top: -100px;
          bottom: -100px;
          left: -100px;
          right: -100px;
          width: 100%;
          margin: auto;
        }
      }
      .info-c {
        color: #fff;
      }
      .name {
        margin-bottom: 10px;
        font-size: 18px;
      }
    }
    .ico {
      color: #fff;
      font-weight: bold;
      font-size: 20px;
    }
  }

  .buyserve-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 25px auto;
    border-radius: 3px;
    box-shadow: 0 0 5px 0 #999;
    background-color: #fff;
    .line {
      width: 1px;
      height: 20px;
      background-color: #ccc;
    }
    &>div {
      height: 40px;
      flex: 1;
      text-align: center;
      line-height: 40px;
      &:active {
        background: #eee;
      }
    }
  }

  .btns {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 60px;
    width: 90%;
    margin: 200px auto 0;
    button {
      margin-bottom: 20px;
    }
  }
</style>