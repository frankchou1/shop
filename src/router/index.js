import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)



const r = new Router({
  // mode: 'history',
  routes
})

let hasGetInfo = false
r.beforeEach((to, from, next) => {
  if(!hasGetInfo)
    // Vue.prototype.AJAX.xxx()//获取个人信息，购物车列表商品的基本信息（id,数量）
    // this.$store.commit('setGoods',list)
    hasGetInfo = true
  next()
})

export default r