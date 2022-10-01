<template>
  <view class="number">
    <u-navbar
      bgColor="#3d5cff"
      color="#cbcdce"
      leftIconColor="#cbcdce"
      :autoBack="true"
    >
    </u-navbar>
    <view v-if="!isShowNumTrain">
      <view
        class="fbl "
        style="padding: 300rpx 120rpx; "
      >
        <view class="text flex_x_center word-text-border">
          数字背诵训练
        </view>
        <view
          class="input flex_x_center"
          style="padding-top: 150rpx; "
        >
          <view
            class=" word-Border-radius"
            style="width: 60%;height: 100rpx; background: #516dff; padding-top:28rpx"
          >
            <u--input
              border="none"
              fontSize="40rpx"
              inputAlign="center"
              color="#CBCDCE"
              v-model="keyword"
            ></u--input>
          </view>
        </view>
        <view
          class=" flex_x_center"
          style="padding-top: 80rpx  ;"
        >
          <!--iconColor="#627bff" <button type="primary" iconColor="#3d5cff"  style="width: 55%;" @click="yes"  shape="circle">开始筛查</button> -->
          <view
            class="word-text-border but"
            style="font-size: 30rpx; padding: 20rpx 40rpx; border-radius: 50upx;"
            @click="numberapi"
          >
            开始训练
          </view>
        </view>
      </view>
    </view>

    <num-train
      v-else
      style="position: relative;top:88rpx;"
      :word_id="word_id"
      :date="date"
      :number="number"
    ></num-train>
    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <z-navigation></z-navigation>
  </view>
</template>

<script>
import numTrain from './components/numTrain.vue';
export default {
  components: { numTrain },
  data() {
    return {
      isShowNumTrain: false,
      keyword: '20',
      word_id: '',
      date: '',
      number: '',
    }
  },
  //  onLoad() {
  //  	this.numberapi()

  //  },
  methods: {
    numberapi() {
      this.isShowNumTrain = true
      this.$http.get('/MemoryTraining/numberMemoryTraining',
        { digital_number: this.keyword },
        {
          header: { //默认 无 说明：请求头
            // 'Content-Type': 'multipart/form-data; charset=UTF-8'
          }
        }).then(data => {
          this.word_id = data.id
          this.date = data.date
          this.number = data.random_number
        })

    }
  }
}
</script>

<style lang="scss" scoped>
.number {
  background: #3d5cff;
  height: 100vh;
  .text {
    font-size: 40rpx;
    font-weight: 1000;
  }
  .but {
    background: #627bff;
    width: 200rpx;
    // height: 20%;
  }
}
</style>

