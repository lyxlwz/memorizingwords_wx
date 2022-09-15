<template>
  <view class="result">
    <view>
      <u-navbar
        bgColor="#3d5cff"
        leftIconColor="#cbcdce"
        @rightClick="rightClick"
        :autoBack="true"
      >
      </u-navbar>
    </view>
    <view class="all">
      <view class="title test-w-b">resort</view>
      <view class="flex">
        <u-button
          style="width:auto"
          class="custom-style"
          type="primary"
          icon="map"
          size="mini"
          shape="circle"
          text="英"
        ></u-button>
        <view class="word-text-middle-1">/ rɪˈzɔːrt /</view>
      </view>
    </view>

    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <z-navigation></z-navigation>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.result {
  height: 100vh;
  background: #3d5cff;
  .all {
    margin: auto;
    width: 90%;
    padding-left: 20rpx;
    .title {
      padding-top: 150rpx;
      color: white;
      font-size: 100rpx;
      font-weight: 200%;
      .custom-style {
        // margin: 0 200rpx;
        width: 50rpx;
      }
    }
  }
}
</style>
