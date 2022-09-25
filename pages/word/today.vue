<template>
  <view class="today">
    <view>
      <u-navbar
        leftText="10/100"
        bgColor="#3d5cff"
        color="#cbcdce"
        leftIconColor="#cbcdce"
        :autoBack="true"
      >
        <view slot="right">
          <view style="font-size: 30rpx; color:#cbcdce;">
            学习日期：{{day}}
          </view>
        </view>
      </u-navbar>
    </view>
    <view style="padding-top: 90rpx; padding-left: 20rpx; padding-right:20rpx;">
      <view
        class="word-text-light-1 flex_x_right"
        style="font-size: 30rpx;"
      >
        分组序号
      </view>
      <view
        class="word-text-light-1 flex_x_right"
        style="padding-top: 20rpx;font-size: 30rpx;"
      >
        单词学习
      </view>
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
          style="padding-left: 20rpx; border-bottom: 4rpx dashed #ddd;"
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
          style="padding-left: 20rpx; border-bottom: 4rpx dashed #ddd;"
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

      <view
        class="flex_bet"
        style="padding: 80rpx 80rpx; display: flex; "
      >
        <view
          class="tab-t word-text-border "
          style="font-size: 40rpx; padding: 10rpx 42rpx; border-radius: 50upx;"
          @click="tabt"
        >
          上一词
        </view>

        <view
          class="tab-b word-text-border "
          style="font-size: 40rpx; padding: 10rpx 42rpx; border-radius: 50upx;"
          @click="tabb"
        >
          下一词
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
      day: '2021-07-16',
      type: '1'
    }
  },
  onLoad() {
    this.api()
  },
  components: { playWords },
  methods: {
    api() {
      this.$http.get('/WordLearn/todayWordScreening',
        {
          date: this.day,
          type: this.type
        },
        {
          header: { //默认 无 说明：请求头
            'Content-Type': 'multipart/form-data; charset=UTF-8'
          }
        }).then(data => {
          console.log(data, '成功返回参数')
        })
    },

    tabt() {
      console.log("上一词")
    },
    tabb() {
      console.log("下一词")
    },
  }
}
</script>
<style lang="scss" scoped>
.today {
  height: 100vh;
  background: #3d5cff;
  .all {
    margin: auto;
    width: 90%;
    // padding-left: 20rpx;
    .title {
      // padding-top: 150rpx;
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
    .tab-t {
      background: #627bff;
    }
    .tab-b {
      background: #627bff;
    }
  }
}
</style>
