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
  watch: {
    flushInfoMsg(nval) {
      this.$refs.uToast.show({
        message: this.infoMsg,
        type: 'success',
      });
    },
    flushErrorMsg(nval) {
      this.$refs.uToast.show({
        message: this.errorMsg,
        type: 'error',
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
