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
