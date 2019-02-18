<template>
  <div class="page-infodetail">
    <header>基础信息</header>

    <van-cell :value="info.name" icon="user-circle-o" is-link>
      <template slot="title">
        <span class="custom-text">头像</span>
      </template>
    </van-cell>

    <div class="van-cell van-cell--clickable">
      <i class="van-icon van-icon-ellipsis van-cell__left-icon"></i>
      <div class="van-cell__title">
        <span class="custom-text">头像</span>
      </div>
      <div class="van-cell__value">
        <span>已绑定</span>
      </div>
      <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
    </div>

    <van-cell :value="info.name" icon="ellipsis" is-link>
      <template slot="title">
        <span class="custom-text">用户名</span>
      </template>
    </van-cell>

    <van-cell title="收货地址" icon="location-o" is-link/>

    <header>账号绑定</header>

    <van-cell :value="info.phone" icon="ellipsis" is-link>
      <template slot="title">
        <span class="custom-text">手机</span>
      </template>
    </van-cell>
    <van-cell :value="info.alipay?'已绑定':'未绑定'" icon="ellipsis" is-link>
      <template slot="title">
        <span class="custom-text">支付宝</span>
      </template>
    </van-cell>
    <van-cell :value="info.wechat?'已绑定':'未绑定'" icon="ellipsis" is-link>
      <template slot="title">
        <span class="custom-text">微信</span>
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  name: "page-infodetail",
  data() {
    return {
      info: {
        name: "frank",
        phone: "18200808888",
        alipay: "asdfafasf",
        wechat: ""
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
//@import ""
</style>