<template>
  <!-- 这里直接引用即可 wordPageSty -->
  <view class="wordPageSty">
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

        <view class="tobe">
          <view class="title">今日待学习单词</view>
          <view class="number margin-tb-xs">
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

        <view class="plan padding-top-lg">
          <text style="font-size: 100%;font-weight: 800;">学习计划</text>
          <view class="aplan margin-top-sm">
            <view class="train">
              <view
                class="format"
                v-for="(plan, index) in planList"
                :key="index"
                @click="planItem(plan,index)"
              >
                <view
                  class="title flex"
                  style="font-weight: 800; font-size: 100%; "
                >
                  <circle-progress
                    :canvasId="`canvas${index}`"
                    active-color="#009DFF"
                    :total="plan.planTotalNum"
                    :num="plan.planNum"
                    :radius="12"
                    :width="66"
                  >
                  </circle-progress>
                  <text class="margin-left-xs">{{plan.planName}}</text>
                </view>
                <view class="percentage">
                  <view class="count">{{plan.planNum}}</view>
                  <view
                    class="all"
                    style="color: #afafaf"
                  >/{{plan.planTotalNum}}</view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="Proverbs margin-top-lg flex">
          <view>
            <view
              class="big "
              style="font-weight: 800;font-size: 130%;color: #4d5156; padding-bottom: 10px;"
            >
              箴言
            </view>
            <view
              class="Small"
              style="font-weight: 900;font-size: 70%;color: #afafaf;"
            >
              人的一生中应该有三个爱好，一
              个帮助你赚钱，一个帮助你管理
            </view>
          </view>
          <img
            :src="require(`static/image/index.png`)"
            width="120rpx"
            height="120rpx"
          >
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
      keyword: "shuru",
      planList: [
        {
          planName: '记忆训练',
          planNum: 7,
          planTotalNum: 10,
        },
        {
          planName: '今日单词学习',
          planNum: 890,
          planTotalNum: 1455,
        },
        {
          planName: '文献背诵',
          planNum: 0,
          planTotalNum: 0,
        },
        {
          planName: '关键词背诵',
          planNum: 0,
          planTotalNum: 0,
        },
      ],
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
    planItem(plan, index) {
      console.log(plan, index, '===plan')
    },
  }
}
</script>
<style lang="scss" scoped>
.hpage {
  height: 360rpx;
  background: #3d5cff;

  .search {
    margin: auto;
    padding-top: 90rpx;
    width: 90%;
    height: 42px;

    .tobe {
      margin-top: 80rpx;
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
        padding: 2rpx 0;
        // font-weight: 900;
        font-weight: bold;
        font-size: 110%;
      }
    }

    .plan {
      .aplan {
        padding: 40rpx;
        background: #ffff;
        border-radius: 20upx;
        box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);
        .format {
          display: flex;
          justify-content: space-between;
          .percentage {
            display: flex;
            // justify-content: flex-end;
          }
        }

        .format:not(:last-child) {
          padding-bottom: 20rpx;
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
