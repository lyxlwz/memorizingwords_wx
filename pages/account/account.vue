<template>
  <view class="user">
    <z-nav-bar
      :backState="1000"
      :homeState="1000"
      bgColor="#3d5cff"
    ></z-nav-bar>
    <view
      class="accout"
      style="padding: 100rpx 40rpx;"
    >
      <view
        class="test-w-b"
        style="font-size: 50rpx;"
      >
        Account
      </view>
      <view class="flex_x_center padding-top-sm">
        <image
          src="../../static/word/img.png"
          style="height: 200rpx;width: 200rpx;"
        ></image>
      </view>
      <view
        class="flex_bet test-w-b text-xl padding-top-lg  margin-top-lg"
        v-for="(i,index) in item"
        :key="index"
      >
        {{i.name}}
        <view>
          {{i.number}}
        </view>

      </view>
    </view>
    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <z-navigation></z-navigation>
  </view>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      item: [
        {
          name: "已背单词数量",
          number: "9000"
        },
        {
          name: "目标单词数量",
          number: "20000"
        },
        {
          name: "数字训练最短时间",
          number: "00:00:30"
        }
      ]
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  //第一次加载
  onLoad(e) {
    // 隐藏原生的tabbar
    uni.hideTabBar();
    this.api()
  },
  //页面显示
  onShow() {
    // 隐藏原生的tabbar
    uni.hideTabBar();
  },
  methods: {
    api() {
      this.item[0].number = this.userInfo.cumulative_learn_words || 0
      this.item[1].number = this.userInfo.word_target || 0
      this.item[2].number = this.userInfo.best_training_time || 0
    }

  }
}
</script>

<style lang="scss" scoped>
.user {
  // height: 80rpx;
  // background: #3d5cff;
  // ::v-deep .header_content {
  //     height: 10rpx;
  //    }
}
</style>
