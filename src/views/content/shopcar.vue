<template>
    <div class="page-shopcar">
        <betterScroll ref="scroller" v-show="list.length>0">
            <div class="carItem" v-for="(item,index) in list" :key="index" 
                @click="goDetail">
                <van-card
                    :num="item.amount"
                    tag="标签"
                    :tags="['ss','ddd']"
                    :price="item.price | priceFilter"
                    desc="描述信息"  
                    title="商品标题"
                    :thumb="item.img"
                    origin-price="10.00"
                    >
                    <div slot="footer">
                        <van-stepper v-model="item.amount"></van-stepper>
                        <van-button size="mini" @click.stop="delItem(item)">删除</van-button>
                    </div>
                </van-card>
            </div>
        </betterScroll>

        <div class="noneTips" v-show="list.length<1"><span>空空如也</span></div>

        <van-submit-bar
            :price="sum"
            button-text="提交订单"
            @submit="onSubmit"
        />
    </div>
</template>


<script>
import betterScroll from "../../components/betterScroll";
  export default {
    name: "page-shopcar",
    components:{ betterScroll },
    data(){
      return {
        list:this.$store.state['shopCarList']
      }
    },

    computed:{
      sum(){
        if(this.list.length == 0) return 0.00
        let sum = 0;
        this.list.forEach(el => {
          sum+=el.price * el.amount *100
        })
        return sum
      }
    },

    mounted() {
      this.$el.style["paddingBottom"] = this.$el.lastElementChild.offsetHeight + 15 + "px";//refs无法获取底部提交部分元素
      this.getListByIds()
    },
    beforeDestroy(){
      // 请求更新购物车
      this.$store.commit('setGoods',this.list)
    },

    methods: {
      // 获取购物车物品的所有信息
      getListByIds(){
        this.list = [
          {id:1,price:11,amount:3,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
          {id:2,price:12,amount:4,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
          {id:3,price:12,amount:5,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
          {id:4,price:12,amount:4,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
          {id:5,price:12,amount:4,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
          {id:6,price:12,amount:4,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
          // {id:7,price:12,amount:4,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
          // {id:8,price:12,amount:4,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
          // {id:9,price:12,amount:4,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
          // {id:10,price:12,amount:4,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
          // {id:11,price:12,amount:4,img:'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'},
        ]
        this.$store.commit('setGoods',this.list)
      },

      // 查看详情
      goDetail(e){
        console.log(e)
        if(!/button|input/i.test(e.target.tagName)){
          this.$router.push('/')
        }
      },

      // 删除商品
      delItem(item){
          this.ASK('','确定要删除该商品吗？')
          .then(()=>{
              // 请求
              this.list = this.list.filter((el)=> el.id !== item.id)
              this.$store.commit('setGoods',this.list)
              this.SUCCESS('删除成功')
          }).catch(err=>{
              this.SUCCESS('取消成功')
          })
      },

      onSubmit(){
        if(this.list.length<1) return 
      }
    },

    filters:{
      priceFilter(val){
        return (+val).toFixed(2)
      }
    }
  }
</script>
<style lang="scss" scoped>
  //@import ""
  .carItem {
    margin-top: 10px;
  }
  .noneTips {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #ccc;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%)
    }
  }
</style>