import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible';//设置html的fontsize
// import Vant from 'vant';
import 'vant/lib/index.css';
import vuePrototype from './utils/vue_prototype';

Vue.use(vuePrototype, { store, router });
// Vue.use(Vant);

import { 
  CellGroup,
  Field,
  Button,
  Toast,
  Tabbar, 
  TabbarItem,
  List,
  Cell,
  NoticeBar,
  Card,
  SubmitBar,
  Sku,
  Icon,
  Stepper,
  Uploader 
} from 'vant';

Vue.use(CellGroup)
.use(Field)
.use(Button)
.use(Toast)
.use(Tabbar)
.use(TabbarItem)
.use(List)
.use(Cell)
.use(NoticeBar)
.use(Card)
.use(SubmitBar)
.use(Sku)
.use(Icon)
.use(Stepper)
.use(Uploader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
