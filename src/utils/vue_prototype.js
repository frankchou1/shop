// import Vue from 'vue';
import AJAX from './ajax'
import { Toast,Dialog } from 'vant';


export default {
  install: (Vue, options) => {

    Vue.prototype.AJAX = AJAX;

    Vue.prototype.SUCCESS = (str) => {
      Toast.success(str);
    };
    Vue.prototype.ERR = (str) => {
      Toast.fail(str);
    };
    Vue.prototype.LOADING = (str, callback) => {
      Toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: '加载中...'
      });
    };
    Vue.prototype.CLEAR = () => {
      Toast.clear();
    };
    Vue.prototype.ASK = (title,message) => {
      return Dialog.confirm({
        title,
        message,
      })
    };
    Vue.prototype.ALERT = (title,message) => {
      return Dialog.alert({
        title,
        message,
      })
    };


    Vue.prototype.DATE_FORMATE = (TimeNum) => {
      if (TimeNum - 0 != TimeNum) return TimeNum
      var date = new Date(Number(TimeNum));
      var Y = date.getFullYear();
      var M = (date.getMonth() + 1) < 10 ? ('0' + date.getMonth()) : (date.getMonth() + 1);
      var D = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate();
      return Y + '-' + M + '-' + D
    };
  }
}