<template>
  <div class="main">
    <header v-show="!$route.meta.hideTop" ref="header">
      <nav>
        <div class="back">
          <van-icon name="arrow-left" size="18px" @click="goback" :class="$route.meta.hideBack?'hide':''"/>
        </div>
        <div class="searchBar" v-if="isSearchBarShow">
          <van-icon name="search" size="16px" @click="handleSearch"/>
          <input type="text" v-model="searchVal" @keyup.enter="handleSearch">
        </div>
        <div class="title" v-else>{{$route.meta.title}}</div>
        <div class="msg" @click="showMsgBar" :class="$route.meta.hideMsg?'hide':''">
          <van-icon name="chat-o" size="18px"/>
          <div class="num" v-show="msgNumShow">{{msgNum}}</div>
        </div>
      </nav>
      <van-notice-bar
        :text="topText"
        mode="closeable"
        left-icon="volume-o"
        @close="linkClose"
        v-show="topTextLink"
      />
    </header>

    <router-view style="height: 100%;overflow: auto;"></router-view>

    <van-tabbar v-model="active" @change="handleChange" v-show="!$route.meta.hideFooter" ref="footer">
      <van-tabbar-item icon="home-o">精选</van-tabbar-item>
      <van-tabbar-item icon="friends-o">收藏</van-tabbar-item>
      <van-tabbar-item icon="friends-o" :info="$store.getters.getShopCarTotal?$store.getters.getShopCarTotal:''">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import routes from "../../router/routes";
export default {
  name: "main-component",
  data() {
    return {
      active: 0,
      topText:
        "这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告这是公告",
      topTextLink: "/",
      searchVal: "",
      msgNumShow:false,
      msgNum:0
    };
  },

  computed: {
    isSearchBarShow() {
      return (
        /\/hot/.test(this.$route.path) || /\/collect/.test(this.$route.path)
      );
    }
  },

  mounted() {
    this.reflashWindow()
  },

  methods: {
    reflashWindow() {
      this.$nextTick(()=> {
        this.$el.style["paddingTop"] = this.$refs["header"].offsetHeight + "px";
        this.$el.style["paddingBottom"] = this.$refs["footer"].$el.offsetHeight + "px";
      })
    },
    handleChange(e) {
      this.active = e;
      this.$router.push(routes[0].children[e].path);
      // this.reflashWindow();
      this.searchVal = ''
    },
    linkClose() {
      this.reflashWindow();
    },

    goback() {
      this.$router.push(this.$route.meta.prePath);
      this.reflashWindow();
    },
    handleSearch() {
      if(/\/hot/.test(this.$route.path)){
        this.SUCCESS('这是精选页的搜索'+this.searchVal);
      }
      if(/\/collect/.test(this.$route.path)){
        this.SUCCESS('这是收藏页的搜索'+this.searchVal);
      }
      
    },
    showMsgBar(){
        this.msgNum++
    },
  },

  watch: {
    $route: {
      handler: function(n, o) {
        let reg = new RegExp(n.path);
        this.active = routes[0].children.findIndex(el =>
          reg.test("/" + el.path)
        );
        this.reflashWindow();
      },
      immediate: true
    },
    msgNum:function (n,o) {
        this.msgNumShow = false
        setTimeout(() => {
            this.msgNumShow = true
        }, 10);
    }
  }
};
</script>
<style lang="scss" scoped>
//@import ""
.hide {
  visibility: hidden;
}
.main {
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: all 0.3s;
}
header {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  background: rgb(242, 242, 242);
  i {
    padding: 5px;
    &:active {
      background: rgb(216, 216, 216);
    }
  }
  .back > i,
  .msg > i {
    padding: 10px;
  }
  .searchBar {
    flex: 1;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 3px;
    input {
      width: 100%;
      height: 20px;
      border: 0;
      outline: none;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
    }
  }
  .title {
    font-size: 16px;
  }
  .msg {
      position: relative;
    .num {
        position: absolute;
        top: 4px;
        right: 2px;
        width: 0.4rem;
        height: 0.4rem;
        background: red;
        border-radius: 50%;
        text-align: center;
        line-height: 0.4rem;
        color: #fff;
        font-size: 0.3rem;
        animation: zoomIn .5s 1;
    }
  }
}
</style>