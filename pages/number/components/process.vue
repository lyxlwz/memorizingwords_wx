<template>
  <view class="number-train text-lg padding">
    <span
      v-if="remember"
      class="text-white "
    >请按顺序输入上一页的数字</span>
    <view
      v-else
      class="flex_bet text-white"
    >
      <span>请记住以下数字</span>
      <span class="flex">
        <u-icon
          color="#fff"
          name="clock"
          class="margin-right-xs"
        ></u-icon>
        <span>00:13:11''26</span>
      </span>
    </view>

    <random-box
      ref="randomBox"
      :remember="remember"
      :random-number="datas.random_number"
    />

    <div class="flex_x_center num-btn">
      <view
        v-if="remember"
        class="btn"
        style="padding: 20rpx 200rpx; border-radius: 50upx;"
        @click="submit"
      >
        提交答案
      </view>

      <view
        v-else
        class="btn"
        style="padding: 20rpx 200rpx; border-radius: 50upx;"
        @click="remember = true"
      >我记住了</view>
    </div>
  </view>
</template>

<script>
import randomBox from './randomBox'
export default {
  name: 'numTrain',
  components: { randomBox },
  mixins: [],
  props: {},
  data() {
    return {
      datas: {},
      remember: false
    }
  },

  computed: {},

  created() {
    this.getData()
  },

  methods: {
    getData() {
      const data = {
        'id': 11,
        'date': '16:45:42.000000',
        'random_number': '31814410535809040085',
        'upload_number': null,
        'amount_error': null,
        'accuracy': null,
        'digital_number': 20,
        'time_spent': null
      }
      this.datas = data
    },
    submit() {
      this.datas.upload_number = this.$refs.randomBox.numList.join('')
      this.$emit('submit', true)
    }
  }
}

</script>
<style lang='scss' scoped>
.number-train {
  background: #3d5cff;
  height: 100vh;
  .num-btn {
    padding-top: 400rpx;
    .btn {
      background: #627bff;
      color: #ddd;
      font-weight: bold;
      border: none;
    }
  }
}
</style>
