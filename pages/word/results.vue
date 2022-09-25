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
      <view
        class="flex "
        style="padding-top: 10rpx;"
      >
        <u-button
          style="width:auto"
          class="custom-style"
          type="primary"
          text="英"
          icon="static/word/word"
          size="mini"
          shape="circle"
        ></u-button>
        <!--  -->
        <play-words></play-words>
        <!--  -->
        <view class="word-text-light-1">/ rɪˈzɔːrt /</view>
      </view>
      <view
        class="translate padding-top-lg"
        style="display: flex;"
      >
        <view class="noun word-text-light-1">
          n.
        </view>
        <view
          class="ntranslate word-text-border"
          style="font-size: 30rpx; padding-left: 20rpx; border-bottom: 4rpx dashed #ddd;"
        >
          度假胜地 采用的方法
        </view>
      </view>
      <view style="display: flex;padding-top: 10rpx;">
        <view class="word-text-light-1">
          vi.
        </view>
        <view
          class="word-text-border"
          style="font-size: 30rpx; padding-left: 20rpx; border-bottom: 4rpx dashed #ddd;"
        >
          诉诸，采取
        </view>
      </view>
      <!-- 联想 -->
      <view style="padding-top: 80rpx;">
        <view
          class="association word-Border-radius"
          style="padding: 30rpx 40rpx"
        >
          <view
            class="word-text-light-1"
            style="font-size: 30rpx;"
          >
            热（re）瘦（s）的鸡蛋（o）热（r）的头（t）疼
          </view>
          <view class="bycorenr margin-top-sm flex_x_right">
            <view
              class="word-text-border word-Border-radius Corner"
              style="font-size: 30rpx; padding: 10rpx 42rpx"
            >
              联想
            </view>
          </view>

        </view>
      </view>
      <!-- 例句 -->
      <view style="padding-top: 50rpx;">
        <view
          class="exp word-Border-radius"
          style="padding: 30rpx 40rpx;"
        >
          <view style="display: flex;">
            <u-button
              style="width:auto"
              class="custom-style"
              type="primary"
              text="英"
              icon="static/word/word"
              size="mini"
              shape="circle"
            ></u-button>

            <view
              class="word-text-light-1"
              style="font-size: 30rpx; padding-left:20rpx"
            >
              This place is just so charming, the perfect winter resort.
            </view>
          </view>

          <view
            class="word-text-light-1"
            style="font-size: 30rpx; padding-left:110rpx;padding-top:20rpx"
          >
            这个地方实在是太好啦，完美的冬季旅游胜地！
          </view>

          <view class=" margin-top-sm flex_x_right">
            <view
              class="word-text-border word-Border-radius expl"
              style="font-size: 30rpx; padding: 10rpx 42rpx"
            >
              例句
            </view>
          </view>

        </view>

      </view>

    </view>

    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <z-navigation></z-navigation>
  </view>
</template>

<script>
import playWords from './components/playWords'
export default {
  data() {
    return {

    }
  },
  components: { playWords },
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
    // padding-left: 20rpx;
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
    .association {
      // height: 200rpx;
      background: #506cff;
      .Corner {
        // height: 60rpx;
        background: #627bff;
        width: 150rpx;
      }
    }
    .exp {
      // height: 320rpx;
      background: #506cff;
      .expl {
        // height: 60rpx;
        background: #627bff;
        width: 150rpx;
      }
    }
  }
}
</style>
