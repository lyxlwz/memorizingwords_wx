<template>
  <view>
    <view class="hpage">
      <view class="search">
        <u-search
          shape="square"
          placeholder="请输入要查询的单词"
          bgColor="#ffff"
          height="90rpx"
          :showAction="false"
          v-model="keyword"
        ></u-search>
        <!-- 间隔 -->
        <u-gap
          height="80rpx"
          bgColor="#3d5cff"
        ></u-gap>

        <view class="tobe">
          <view class="title">今日待学习单词</view>
          <view class="number">
            201
          </view>
          <u-line-progress
            :percentage="30"
            :showText="false"
            height="10"
            activeColor="#f59b22"
          >
          </u-line-progress>
        </view>
        <!-- 间隔 -->
        <!-- <u-gap
          height="40rpx"
          bgColor="#f5f5f5"
        ></u-gap> -->

        <view class="plan padding-top-lg">
          <text style="font-size: 130%;font-weight: 800;">学习计划</text>
          <view class="aplan padding-top-xs">
            <view
              class="train"
              @click="train"
            >
              <view class="format">
                <view
                  class="title flex"
                  style="font-weight: 800; font-size: 100%; "
                >
                  <circle-progress
                    canvasId='canvas'
                    active-color="#2979ff"
                    :total="10"
                    :num="3"
                    :radius="12"
                    :width="66"
                  >
                  </circle-progress>
                  <text class="margin-left-xs">记忆训练</text>
                </view>
                <view class="percentage">
                  <view class="count">7</view>
                  <view
                    class="all"
                    style="color: #afafaf"
                  >/10</view>
                </view>
              </view>

            </view>
            <view
              class="today"
              @click="today"
            >
              <view class="format">
                <view
                  class="title"
                  style="font-weight: 800; font-size: 100%; padding-bottom: 20px;"
                >
                  今日单词学习
                </view>
                <view class="percentage">
                  <view class="count">890</view>
                  <view
                    class="all"
                    style="color: #afafaf"
                  >/1455</view>
                </view>
              </view>
            </view>
            <view
              class="lit"
              @click="lit"
            >
              <view class="format">
                <view
                  class="title"
                  style="font-weight: 800; font-size: 100%; padding-bottom: 20px;"
                >
                  文献背诵
                </view>
                <view class="percentage">
                  <view class="count">0</view>
                  <view
                    class="all"
                    style="color: #afafaf"
                  >/0</view>
                </view>
              </view>
            </view>
            <view
              class="key"
              @click="key"
            >
              <view class="format">
                <view
                  class="title"
                  style="font-weight: 800; font-size: 100%;"
                >
                  关键词背诵
                </view>
                <view class="percentage">
                  <view class="count">0</view>
                  <view
                    class="all"
                    style="color: #afafaf"
                  >/0</view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="Proverbs margin-top-lg">
          <view
            class="big"
            style="font-weight: 800;font-size: 180%;padding-bottom: 10px;"
          >
            箴言
          </view>
          <view
            class="Small"
            style="font-weight: 900;font-size: 80%;color: #afafaf;"
          >
            人的一生中应该有三个爱好，一
            个帮助你赚钱，一个帮助你管理
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
import circleProgress from '@/components/circle-progress/circle-progress'
export default {
  data() {
    return {
      keyword: "shuru"
    };
  },
  components: {
    circleProgress,
  },
  //第一次加载
  onLoad(e) {
    // 隐藏原生的tabbar
    uni.hideTabBar();
  },
  //页面显示
  onShow() {
    // 隐藏原生的tabbar
    uni.hideTabBar();
  },
  //方法
  methods: {
    train() {
      console.log("1")
    },
    today() {
      console.log("2")
    },
    lit() {
      console.log("3")
    },
    key() {
      console.log("4")
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/style/mixin.scss";

.hpage {
  height: 360rpx;
  background: #3d5cff;

  .search {
    margin: auto;
    padding-top: 90rpx;
    width: 90%;
    height: 42px;

    .tobe {
      // padding-top:30px;
      padding: 18rpx;
      background: #ffff;
      border-radius: 20upx;
      box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);

      .title {
        color: #afafaf;
        font-weight: 900;
        // margin-left: 5px;
        font-size: 80%;
      }

      .number {
        padding: 1px 0;
        font-weight: 900;
        font-size: 160%;
      }
    }

    .plan {
      .aplan {
        padding: 20px;
        background: #ffff;
        border-radius: 20upx;
        box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);
        .format {
          display: flex;
          justify-content: space-between;
          .percentage {
            padding-left: 70px;
            display: flex;
            // justify-content: flex-end;
          }
        }
      }
    }
    .Proverbs {
      background: #efe0ff;
      box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);
      border-radius: 20upx;
      padding: 20px 20px;
    }
  }
}
</style>
