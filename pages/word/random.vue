<template>
  <view class="Fallible">
    <view>
      <u-navbar
        bgColor="#3d5cff"
        leftIconColor="#cbcdce"
        @rightClick="rightClick"
        :autoBack="true"
      >
      </u-navbar>
    </view>
    <view
      class="fbl "
      style="padding: 300rpx 120rpx; "
    >
      <view class="text flex_x_center word-text-border">
        随机单词筛查
      </view>
      <view
        class="input flex_x_center"
        style="padding-top: 150rpx; "
      >
        <view
          class=" word-Border-radius"
          style="width: 60%;height: 100rpx; background: #516dff; padding-top:20rpx"
        >
          <u-input
            border="none"
            fontSize="50rpx"
            inputAlign="center"
            color="#CBCDCE"
            v-model="keyword"
          ></u-input>
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
          @click="yes"
        >
          开始筛查
        </view>
      </view>
    </view>
    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <z-navigation></z-navigation>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      keyword: '20',
    }
  },
  computed: {
    ...mapState(['wordList', 'wordId'])
  },
  methods: {
    ...mapMutations(['setWordList', 'setWordId', 'emptyWordList', 'emptyWorId']),
    yes() {
      this.$http.get('/WordLearn/randomWordScreening',
        { count: this.keyword }).then(res => {
          this.setWordList(res.temp_word_list)
          this.setWordId(res.temp_word_list[0])
          uni.navigateTo({
            url: `/pages/word/scre?word_id=${res.temp_word_list[0]}&type=2`
          });
          // console.log("请求成功")

        })
    }


  }
}
</script>

<style lang="scss" scoped>
.Fallible {
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
 ::v-deep .u-input__content__field-wrapper__field.data-v-fdbb9fe6{
  	  height: 50rpx;
  }
</style>

