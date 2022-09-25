<template>
  <!-- 这里直接引用即可 wordPageSty -->
  <view class="wordPageSty">
    <view class="hpage">
      <view class="search">
		  <view @click="search">
		  	  <u-search
          shape="square"
          placeholder="请输入要查询的单词"
          bgColor="#ffff"
          height="90rpx"
          :showAction="false"
        >
		<view v-slot="slot">
			quxiao
		</view>
		</u-search>
		  </view>
      
        <view class="tobe" @click="tobe">
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
                <view class="title flex">
                  <circle-progress
                    :canvasId="`canvas${index}`"
                    active-color="#009DFF"
                    :total="plan.planTotalNum"
                    :num="plan.planNum"
                    :radius="12"
                    :width="66"
                  >
                  </circle-progress>
                  <text class="margin-left-sm test-w-b flex_y_center">{{plan.planName}}</text>
                </view>
                <view class="percentage test-w-b flex_y_center">
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
        <view
          class="Proverbs margin-top-lg flex"
          :style="{'background':bgColor}"
        >
          <view>
            <view
              class="big "
              style="font-weight: 800;font-size: 130%;color: #4d5156; padding-bottom: 10px;"
            >
              箴言
            </view>
            <view
              class="Small test-w-b word-text-middle"
              style="font-size: 80%;"
            >
              {{text}}
            </view>
          </view>
          <img
            :src="`data:image/png;base64,${imgUrl}`"
            alt=""
            width="120rpx"
            height="120rpx"
          >
        </view>

      </view>

    </view>
    <search :show.sync="pop"></search>
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
      keyword: '',
      text: '',
      bgColor: '',
      imgUrl: '',
      pop: false,
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
    this.getData()
    this.api()
  },
  //页面显示
  onShow() {
    // 隐藏原生的tabbar
    uni.hideTabBar();
  },
  //方法
  methods: {
    api() {
      this.$http.get('/Aphorism/aphorism_search').then(data => {
        console.log(data, '成功返回参数')
        this.text = data.aphorism
        this.bgColor = data.color
        // this.imgUrl = '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'
        this.imgUrl = data.picture
      })
    },
    planItem(plan, index) {
      if (index === 0) {
        uni.navigateTo({
          url: '/pages/number/number'
        });
      } else if (index === 1) {
        uni.navigateTo({
          url: '/pages/word/today'
        });
      }
    },
    tobe() {
      uni.navigateTo({
        url: '/pages/word/today'
      });
    },
    getData() {
    },
    search() {
      this.pop = true;
    }
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
          font-size: 90%;
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
      box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);
      border-radius: 20upx;
      padding: 20px 20px;
    }
  }
}

::v-deep .u-search__content {
  border-radius: 10px !important;
}
</style>
