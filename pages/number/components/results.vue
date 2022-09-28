<template>
  <view class="text-lg padding num-results">
    <view class="word-Border-radius accTraining padding text-bold">
      <view class="word-text-light text-sm">数字训练准确率<span>10%</span></view>
      <view class="text-xl margin-tb-xs">01:13''12</view>
      <u-line-progress
        :show-text="false"
        :percentage="70"
        :stroke-width="10"
        activeColor="#f59b22"
      />
    </view>

    <view class="checkAnswers">
      <view class="flex justify-between text-sm  align-center">
        <view>你的答案</view>
        <view class="flex">
          <view
            v-for="(rule,ruleIndex) in answerRules"
            :key="ruleIndex"
            class="flex align-center margin-left-xs"
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
        random-number="31814410535809040085"
      />
    </view>

    <view class="checkAnswers">
      <view class="flex justify-between text-sm  align-center">
        <view>标准答案</view>
      </view>

      <random-box
        ref="randomBox"
        random-number="31814410535809040085"
      />
    </view>

    <view class="flex-row margin-top-xl">
      <view
        class="btn"
        style="padding: 20rpx 100rpx; border-radius: 50upx;"
      >
        结束训练
      </view>

      <view
        class="btn"
        style="padding: 20rpx 100rpx; border-radius: 50upx;"
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
  props: {},
  data() {
    return {
      answerRules: [
        {
          color: '#00FF49',
          title: '正确'
        },
        {
          color: '#D8001B',
          title: '错误'
        },
        {
          color: '#fff',
          title: '未做'
        }
      ]
    }
  },

  computed: {},

  mounted() { },

  methods: {}
}

</script>
<style lang='scss' scoped>
.num-results {
  background: #3d5cff;
  height: 100vh;
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
