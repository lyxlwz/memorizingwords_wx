<template>
  <view class="result">
    <view>
      <u-navbar
        bgColor="#3d5cff"
        leftIconColor="#cbcdce"
        @rightClick="rightClick"
        :autoBack="true"
      >
      </u-navbar>
    </view>
    <view class="all">
      <view class="title test-w-b">{{wordObj.word}}</view>
      <view
        class="flex "
        style="padding-top: 10rpx;"
      >
        <view class="word-Border-radius padding-xs association text-xs flex-start text-white" style="background: #5670fb;">
          <view class="margin-right-xs">英</view>
          <play-words ref="playWords"></play-words>
        </view>
        <!--  -->
        <!-- <play-words></play-words> -->
        <!--  -->
      </view>
      <view
        class="translate padding-top-lg"
        style="display: flex;"
      >
        <view
          class="ntranslate word-text-border"
          style="font-size: 30rpx; padding-left: 20rpx; border-bottom: 4rpx dashed #ddd;"
        >
          {{wordObj.paraphrase}}
        </view>
      </view>
    
      </view>
      <!-- 联想 -->
      <view style="padding-top: 80rpx;">
        <view
          class="association word-Border-radius"
          style="padding: 30rpx 40rpx"
        >
          <view
            class="word_content"
            v-if="!isEditorMind"
          >
            <u-parse :content="wordObj.connect_in_the_mind"></u-parse>
          </view>
          <cu-editor
            v-else
            ref="wordEditor"
            :content="wordObj.connect_in_the_mind"
          ></cu-editor>
        
          <view
            class="bycorenr margin-top-sm flex_x_right"
            @touchend="dbClickMind"
          >
            <view
              class="word-text-border word-Border-radius Corner"
              style="font-size: 30rpx; padding: 10rpx 42rpx"
            >
              联想
            </view>
          </view>
        
        </view>
      </view>
      <!-- 例句 -->
      <view style="padding-top: 50rpx;">
        <view
          class="exp word-Border-radius"
          style="padding: 30rpx 40rpx;"
        >
          <view style="display: flex;">
            <view
              class="word-text-light-1"
              style="font-size: 30rpx;"
            >
              {{wordObj.example}}
            </view>
          </view>
        
          <view class=" margin-top-sm flex_x_right">
            <view
              class="word-text-border word-Border-radius expl"
              style="font-size: 30rpx; padding: 10rpx 42rpx"
            >
              例句
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
import playWords from './components/playWords'
export default {
  data() {
    return {
		// content: '<p>热（<span style="color: rgb(225, 60, 57);">re</span>）瘦（<span style="color: rgb(225, 60, 57);">s</span>）的鸡蛋（<span style="color: rgb(225, 60, 57);">o</span>）热（<span style="color: rgb(225, 60, 57);">r</span>）的头（<span style="color: rgb(225, 60, 57);">t</span>）疼</p><p></p>',
		wordObj: {
		  word: "",
		  paraphrase: "",
		  connect_in_the_mind: "",
		  example: "",
		  group_id: "",
		  study_date: "",
		  first_study_date: "",
		  word_voice: ""
		},
		isEditorMind: false,
    }
  },
  onLoad(option){
	  console.log(option.name)
  },
  components: { playWords },
  methods: {
	  resapi(){
		  this.$http.get('/WordSystem/wordData',
		    {word_id:2},
		    {
		      header: { //默认 无 说明：请求头
		        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		      }
		    }).then(res => {
		  				this.wordObj = res
		  			})
	  },
	  dbClickMind() {
	    this.touchNumMind++
	    setTimeout(() => {
	      if (this.touchNumMind >= 2) {
	        this.isEditorMind = true
	      }
	      this.touchNumMind = 0
	    }, 250)
	  },
  }
}
</script>
<style lang="scss" scoped>
.result {
  height: 100vh;
  background: #3d5cff;
  .all {
    margin: auto;
    width: 90%;
    // padding-left: 20rpx;
    .title {
      padding-top: 150rpx;
      color: white;
      font-size: 100rpx;
      font-weight: 200%;
      .custom-style {
        // margin: 0 200rpx;
        width: 50rpx;
      }
    }
    .association {
      // height: 200rpx;
      background: #506cff;
      .Corner {
        // height: 60rpx;
        background: #627bff;
        width: 150rpx;
      }
      ::v-deep.word_content {
        color: #cbcdce;
        font-size: 30rpx;
      }
    }
    .exp {
      // height: 320rpx;
      background: #506cff;
      .expl {
        // height: 60rpx;
        background: #627bff;
        width: 150rpx;
      }
    }
  }
}
</style>
