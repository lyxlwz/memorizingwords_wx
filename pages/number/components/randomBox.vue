<template>
  <view class="flex_wrap num-training padding-top">
    <view
      v-for="(num,numIndex) in randomNumber"
      :key="numIndex"
      class="num-training-item"
    >
      <view
        class="word-Border-radius text-center num-training-num"
        style="margin:10%"
      >
        <u--input
          v-if="remember"
          v-model="numList[numIndex]"
          maxlength="1"
          type="text"
          border="none"
          fontSize="40rpx"
          inputAlign="center"
          color="#CBCDCE"
        >
        </u--input>
        <span
          class="word-text-light-1"
          v-else
        >{{ num }}</span>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'RandomBox',
  props: {
    randomNumber: {
      type: String,
      default: ''
    },
	answerRules: {
	      type: Array,
	      default: () => {
	        return []
	      }
	    },
    remember: {
      type: Boolean,
      default: false
    },
	answerResult: {
	      type: String,
	      default: ''
	    }
  },
  data() {
    return {
      numList: []
    }
  },
watch: {
    answerResult(val) {
      val.split(',').forEach(answer => {
        if (answer === this.answerRules[0].state) {
          console.log('5555', this.answerRules[0].color)
          this.colorList.push(this.answerRules[0].color)
        } else if (answer === this.answerRules[1].state) {
          console.log('666666', this.answerRules[0].color)
          this.colorList.push(this.answerRules[1].color)
        }
      })
    }
  },
  computed: {},

  mounted() { },

  methods: {}
}

</script>
<style lang='scss' scoped>
.num-training {
  &-item {
    width: 10%;
    // margin: 1%;
  }
  &-num {
    background: #506cff;
    padding: 10%;
  }
}
</style>
