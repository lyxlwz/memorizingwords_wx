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
      :random-number="number"
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
  props: {
	  number: {
	  		 type: String,
	  		  default:0
	  },
	  data: String,
	  id: [String,Number]
  },
  data() {
    return {
      remember: false
    }
  },

  computed: {},

  created() {
	  
  },

  methods: {
    submit() {
		//这里是更新的数字就是第三个页面，他记住数字之后要提交的这个玩意
      const upload_number = this.$refs.randomBox.numList.join('')
	  this.$emit('submit',{isFinite:true, upload_number, time_spent:this.time_spent})
    }
  }
}

</script>
<style lang='scss' scoped>
.number-train {
  background: #3d5cff;
  height: 90vh;
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
