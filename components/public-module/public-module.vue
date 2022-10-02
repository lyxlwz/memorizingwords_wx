<template>
  <view>
    <!-- 加载动画组件 -->
    <z-loading></z-loading>
    <!-- #ifdef MP-WEIXIN -->
    <!-- 小程序绑定微信头像昵称弹窗组件 -->
    <applets-bind-userInfo></applets-bind-userInfo>
    <!-- #endif -->
    <!-- #ifdef APP-PLUS -->
    <guide-pages></guide-pages>
    <!-- #endif -->
    <u-toast
      type="error"
      ref="uToast"
    ></u-toast>
  </view>
</template>

<script>
export default {
  mounted() {
    //初始化赋值，如果使用的页面未初始化会报错，就算已经其他页面已经初始化过了也会看不到，所以建议用全局导航栏u-navbar
    getApp().globalData.toast = this.$refs.uToast
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
</style>
