<template>
    <div class="bs-wrapper">

        <div class="bs-scroller" ref="scroller">
            <div class="content" ref="content">
                <slot></slot>
                <div class="list-loading" v-if="loading">加载中</div>
                <div class="list-end" v-else>已经到底了</div>
            </div>
        </div>
        
        <div class="ctrl-place">
            <div v-if="isShowBackTop" class="b2t-btn"  @click="backToTop">
                <van-icon name="arrow-up"></van-icon>
            </div>
            <slot name="backToTop"></slot>
        </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "betterScroll",
    props: {
      loading: Boolean,
      dataChangeCount: Number
    },
    data() {
      return {
        height:0,
        scrollY: 0,
        scroller: null
      };
    },
    methods: {
      backToTop() {
        this.scroller.scrollTo(0, 0, 500);
      },
    },
    computed: {
      isShowBackTop() {
        return this.height + this.scrollY < 0;
      },
    },
    watch: {
      dataChangeCount:function (n,o) {
        this.scroller.finishPullUp()
      }
    },
    mounted() {
      this.height = this.$refs['scroller'].offsetHeight
      this.scroller = new BScroll(this.$refs.scroller, {
        click: true,
        probeType: 2,
        bounce: true,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      });

      this.scroller.openPullUp({
        threshold: 50
      })
      this.scroller.on("pullingUp", () => {
        this.$emit("pulling-up");
      });

      this.scroller.on("scroll", ({x,y}) => {
        this.scrollY = y
      });
    }
  };
</script>

<style lang="scss" scoped>

    .list-loading {
      width: 100%;
        font-size: 14px;
        text-align: center;
        color: #999;
        line-height: 1.8;
        padding-right: 10px;
        padding-top: 10px;
        .van-loading {
            display: inline-block;
            width: 20px;
            height: 20px;
        }
        span {
            padding-left: 5px;
        }
    }
    .list-end {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      font-size: 14px;
      text-align: center;
      color: #999;
      line-height: 1.8;
      padding-right: 10px;
      padding-top: 10px;
      margin: auto;
    }
    .bs-scroller{
        height: 100%;
        overflow: hidden;
    }
    .bs-wrapper{
        height: 100%;
        position: relative;
    }

    .ctrl-place {
        position: absolute;
        bottom: 15px;
        right: 15px;
        color: #333;
        z-index: 999;
        .b2t-btn{
            position: relative;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            box-shadow: 0 0 5px 0px #999;
            font-size: 24px;
            color: #999;
            text-align: center;
            cursor: pointer;
            &>i {
              line-height: 32px;
            }
        }
    }
</style>


