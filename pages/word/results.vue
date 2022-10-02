<template>
  <view class="result">
    <u-navbar
      bgColor="#3d5cff"
      leftIconColor="#cbcdce"
      @rightClick="rightClick"
      :autoBack="true"
    >
    </u-navbar>
    <view style="position: relative;top: 30rpx;">
      <view class="all">
        <view
          class="title test-w-b"
          @touchend="dbClickWord"
        >
          <text v-if="!isEditorWord">{{wordObj.word}}</text>
          <input
            v-else
            class="input_item"
            v-model="wordObj.word"
            style="height:80px !important;border:1px solid #fff;border-radius:20rpx;"
            placeholder="请输入单词"
          />
        </view>
        <view
          class="flex-start"
          style="padding-top: 10rpx;"
        >
          <view
            class="padding-xs association text-sm flex-start text-white"
            style="border-radius:24rpx;justify-content: space-around;width: 100rpx;"
            @click="wordIsPlay = !wordIsPlay"
          >
            <view class="margin-right-xs">英</view>
            <play-words
              :first-load="firstLoad"
              ref="playWords"
              play-id="wordLink"
              :audio-play.sync="wordIsPlay"
              :audio-link="wordObj.word_voice"
            ></play-words>
          </view>
        </view>
        <view
          class="translate padding-top-lg"
          style="display: flex;"
        >
          <view
            class="ntranslate word-text-border"
            style="font-size: 30rpx;"
          >
            {{wordObj.paraphrase}}
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

      </view>
    </view>

    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <z-navigation></z-navigation>
  </view>
</template>

<script>
import playWords from './components/playWords'
import cuEditor from '@/components/cu-editor/cu-editor'
import base from '@/config/baseUrl';
export default {
  data() {
    return {
      day: new Date().format("yyyy-MM-dd"),
      wordIsPlay: false,
      wordObj: {
        id: 201,
        word: "",
        paraphrase: "",
        connect_in_the_mind: "",
        example: "",
        group_id: "",
        study_date: "",
        first_study_date: "",
        word_voice: ""
      },
      touchNumWord: 0,
      isEditorWord: false,
      touchNumMind: 0,
      isEditorMind: false,
      firstLoad: false,
    }
  },
  onLoad(options) {
    this.firstLoad = true
    this.resapi(options.id)
  },
  components: { playWords },
  methods: {
    resapi(word_id) {
      this.$http.get('/WordSystem/wordData',
        { word_id }).then(res => {
          this.wordObj = res
          this.wordObj.word_voice = `${base.wordVoiceUrl}${res.word_voice}`
          this.$nextTick(() => {
            this.$refs.playWords.creatAudio()
          })
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
    // height: calc(90vh - 300rpx);
    // overflow: scroll;
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
