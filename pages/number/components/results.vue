<template>
  <view class="text-lg padding num-results">
    <view style="padding-top: 50rpx;">
      <view class="word-Border-radius accTraining padding text-bold">
        <view class="word-text-light text-sm">数字训练准确率<span>{{numObj.accuracy}}%</span></view>
        <view class="text-xl margin-tb-xs">{{numObj.time_spent}}</view>
        <u-line-progress
          :show-text="false"
          :percentage="numObj.accuracy"
          :stroke-width="10"
          activeColor="#f59b22"
        />
      </view>
    </view>

    <view class="checkAnswers">
      <view class="flex-row text-sm">
        <view>你的答案</view>
        <view class="flex">
          <view
            v-for="(rule,ruleIndex) in answerRules"
            :key="ruleIndex"
            class="flex_y_center margin-left-xs"
          >
            <view
              class="answer-box word-info-bgcolor margin-right-xs"
              :style="{'border':`1px solid${rule.color}`}"
            ></view>
            <span>{{ rule.title }}</span>
          </view>
        </view>
      </view>

      <random-box
        ref="randomBox"
        :random-number="numObj.upload_number"
        :answer-result="numObj.res"
        :answer-rules="answerRules"
      />
    </view>

    <view class="checkAnswers">
      <view class="flex justify-between text-sm  align-center">
        <view>标准答案</view>
      </view>

      <random-box
        ref="randomBox"
        :random-number="numObj.random_number"
      />
    </view>

    <view class="flex-row margin-top-xl">
      <view
        class="btn"
        style="padding: 20rpx 100rpx; border-radius: 50upx;"
        @click="finishTrain"
      >
        结束训练
      </view>

      <view
        class="btn"
        style="padding: 20rpx 100rpx; border-radius: 50upx;"
        @click="practiceAgain"
      >
        再次练习
      </view>
    </view>
  </view>
</template>

<script>
import randomBox from './randomBox'
export default {
  name: 'Results',
  components: { randomBox },
  mixins: [],
  props: {
    numObj: {
      type: Object,
      default: function () {
        return {

        }
      }
    }


  },
  data() {
    return {
      answerRules: [
        {
          color: '#00FF49',
          state: 'correct',
          title: '正确'
        },
        {
          color: '#D8001B',
          state: 'error',
          title: '错误'
        }
        // {
        //   color: '#fff',
        //   state:'',
        //   title: '未做'
        // }
      ]
    }
  },

  computed: {},

  mounted() { },

  methods: {
    finishTrain() {
      uni.navigateBack();
    },
    practiceAgain() {
      const pages = getCurrentPages()
      const curPage = pages[pages.length - 1]
      console.log(curPage);
      const url = curPage.$page.fullPath
      uni.reLaunch({
        url
      })
    },
  }
}

</script>
<style lang='scss' scoped>
.num-results {
  background: #3d5cff;
  height: 90vh;
  .accTraining {
    background: #fff;
    color: #000;
  }

  .checkAnswers {
    padding-top: 50px;

    .answer-box {
      width: 20px;
      height: 20px;
      border-radius: 6px;
    }
  }

  .btn {
    background: #627bff;
    color: #ddd;
    font-weight: bold;
    border: none;
  }
}
</style>
