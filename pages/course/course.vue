<template>
  <view>
    <view class="course">
      <view class="text">导航</view>
      <view class="ge padding-top-lg">
        <view
          class="tobe flex"
          v-for="(i,index) in list"
          :key="index"
          @click="to(i.chinese)"
        >
          <view
            class="image"
            style="padding: 30rpx; 40rpx;"
          >
            <image
              :src="require(`static/image/image${index}.png`)"
              style="height: 130rpx;width: 130rpx;"
            >
          </view>
          <view>
            <view class="title text-dark">{{i.chinese}}</view>
            <view class="english">{{i.english}}</view>
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
export default {
  data() {
    return {
      list: [
        {
          chinese: "今日单词学习",
          english: "Robertson Connie"
        },
        // {
        //   chinese: "今日单词筛查",

        //   english: "Nguyen Shane"
        // },
        {
          chinese: "易错单词筛查",
          english: "Bert Pullman"
        },
        {
          chinese: "随机单词筛查",
          english: "Robertson Connie"
        },
        {
          chinese: "数字记忆训练",
          english: "Nguyen Shane"
        },
        {
          chinese: "词组记忆训练",
          english: "Bert Pullman"
        },
        {
          chinese: "文献背诵",
          english: "Robertson Connie"
        },
        {
          chinese: "关键词背诵",
          english: "Nguyen Shane"
        },
        {
          chinese: "Visual Design",
          english: "Bert Pullman"
        }
      ]
    }
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
  methods: {
    to(name) {
      if (name === '易错单词筛查') {
        uni.navigateTo({
          url: '/pages/word/Fallible'
        });
      } else if (name === '随机单词筛查') {
        uni.navigateTo({
          url: '/pages/word/random'
        });
      } else if (name === '今日单词学习') {
        uni.navigateTo({
          url: '/pages/word/today'
        });
      }
      // else if (name === '今日单词筛查') {
      //   uni.navigateTo({
      //     url: '/pages/word/scre'
      //   });
      // }
      else if (name === '数字记忆训练') {
        uni.navigateTo({
          url: '/pages/number/number'
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/mixin.scss";
.course {
  height: 360rpx;
  background: #3d5cff;
  .text {
    color: white;
    font-weight: 900;
    font-size: 50rpx;
    padding-top: 100rpx;
    padding-left: 40rpx;
  }
  .ge {
    height: calc(90vh - 200rpx);
    overflow: scroll;
    .tobe {
      height: 200rpx;
      margin: 35rpx;
      width: 90%;
      background: #ffff;
      border-radius: 20rpx;
      box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);

      .title {
        padding-top: 30rpx;
        font-weight: 550;
        font-size: 35rpx;
      }

      .english {
        padding: 10rpx 0;
        color: #afafaf;
        // padding: 1rpx 0;
        font-weight: 600;
        font-size: 30rpx;
      }
    }
  }
}
</style>
