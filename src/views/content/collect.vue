<template>
    <div class="page-collect">
        <betterScroll :loading="loading" :dataChangeCount="dataChangeCount" @pulling-up="scrollEnd" ref="scroller">
            <div class="item " v-for="(item,index) in list" :key="index" @click.stop="$router.push('/')">
                <div class="clearfix">
                    <div class="imgbox fl"><img :src="item.img" alt=""></div>
                    <div class="itemName fl">{{item.itemName}}</div>
                    <div class="close fr" @click.stop="delItem(item)"><van-icon name="delete" /></div>
                </div>
                <div class="itembtns">
                    <span >￥19.00</span>
                    <van-button type="warning " size="mini" 
                      style="width:auto;padding-left:5px;padding-right:5px;vertical-align:middle;"
                      @click.stop="addToShopcar(item,index)">加入购物车</van-button>
                </div>
            </div>
        </betterScroll>
    </div>
</template>
<script>
import betterScroll from "../../components/betterScroll";
  export default {
    name: "page-collect",
    components:{ betterScroll },
    data(){
      return {
        list: [],
        loading: true,
        dataChangeCount:0
      }
    },
    mounted() {
      this.onLoad()
    },
    methods: {
      // 数据加载
      onLoad(){
        this.loading = true
        if(this.dataChangeCount === 2) return this.loading = false
        setTimeout(() => {
            for (let index = 0; index < 10; index++) {
                this.list.push({
                  id:index,
                  itemName:'按时打发法啊发发阿斯蒂芬案说法安抚按时打发法啊发发阿斯蒂芬案说法安抚',
                  img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
                })
            }
            this.loading = false
            this.dataChangeCount++
        }, 1000);
        
      },

      scrollEnd(){
        console.log('到底了')
        this.onLoad()
      },

      // 删除链接
      delItem(item){
          this.ASK('','确定要删除该收藏链接吗？')
          .then(()=>{
                this.SUCCESS('删除成功')

          }).catch(err=>{
              this.SUCCESS('取消成功')
          })
      },

      // 加入购物车
      addToShopcar(item,idx){
        this.$store.dispatch('addGoods',{id:item.id,amount:1})
        .then(res=>{
          this.SUCCESS('已添加')
        })
      }
    },
  }
</script>
<style lang="scss" scoped>
  //@import ""
  .page-collect {
    padding-bottom: 20px;
    background: #f2f2f2;
  }
  .item {
    position: relative;
    display: block;
      background: #fff;
      padding: 10px;
      margin: 10px;
      border-radius: 3px;
      color: #222;
      .imgbox {
          position: relative;
          width: 20%;
          padding-top: 20%;
          overflow: hidden;
          img {
              position: absolute;
              top: -100px;
              bottom: -100px;
              left: -100px;
              right: -100px;
              margin: auto;
              width: 100%;
          }
      }
      .itemName {
          width: 70%;
          padding-left: 5%;
          // padding-top: 10px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            -webkit-box-orient:vertical;
            color: #222;
            line-height: 1.8;
      }
      .itembtns {
        position: absolute;
        bottom: 0;
        right: 10%;
        padding-bottom: 10px;
        &>span {
          vertical-align: middle;
          margin-right: 15px;
          color: red;
          font-size: 18px;
        }
      }
  }
</style>