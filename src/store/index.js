import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopCarList:[],//购物车列表

  },


  getters:{
    // 购物车总数
    getShopCarTotal(state){
      // let sum = 0;
      // state.shopCarList.forEach(el => {
      //   sum+=el.amount
      // });
      return state.shopCarList.length
    },
    
  },


  mutations: {
    // 修改购物车列表
    setGoods(state,list){
      state.shopCarList = list
    }
  },


  actions: {
    addGoods ({state,commit},{id,amount}) {
      // console.log(Vue.prototype.AJAX)
      console.log(state.shopCarList)
      let item = state.shopCarList.find(el => el.id == id) 
      if(item) {
        item.amount += amount
      }else {
        state.shopCarList.push({id,amount})
      }
      return 1//返回一个Promise(请求)
    },
    delGoods ({state,commit},{id,amount}) {
      let item = state.shopCarList.find(el => el.id == id) 
      if(item) {
        if(amount)
          item.amount = amount
        else
          state.shopCarList = state.shopCarList.filter(el=> el.id != id)
      }
      return 1//返回一个Promise
    },
  }
})
