<template>
  <view class="today wordPageSty">
    <u-navbar
      leftText="10/100"
      bgColor="#3d5cff"
      color="#cbcdce"
      leftIconColor="#cbcdce"
      :autoBack="true"
    >
      <view slot="right">
        <view style="font-size: 30rpx; color:#cbcdce;">
          学习日期：{{wordObj.study_date}}
        </view>
      </view>
    </u-navbar>
    <view style="position: relative;top: 20px;">
      <view style="padding-top: 90rpx; padding-left: 20rpx; padding-right:20rpx;">
        <view
          class="word-text-light-1 flex_x_right"
          style="font-size: 30rpx;"
        >
          分组序号
        </view>
        <view
          class="word-text-light-1 flex_x_right"
          style="padding-top: 20rpx;font-size: 30rpx;"
        >
          单词学习
        </view>
      </view>
      <view class="all">
        <view
          class="title test-w-b"
          @touchend="dbClickWord"
        >
          <text v-if="!isEditorWord">{{wordObj.word}}</text>
          <u-input
            v-else
            v-model="wordObj.word"
            color="#fff"
            fontSize="50"
          ></u-input>
        </view>
        <view
          class="flex-start"
          style="padding-top: 10rpx;"
        >
          <view
            class="padding-xs association text-xs flex-start text-white"
            style="background: #5670fb;border-radius:24rpx;"
            @click="wordIsPlay = !wordIsPlay"
          >
            <view class="margin-right-xs">英</view>
            <play-words
              ref="playWords"
              play-id="wordLink"
              :audio-play.sync="wordIsPlay"
              :audio-link="wordObj.word_voice"
            ></play-words>
          </view>

          <!--  -->
          <!-- <view
          class="word-text-light-1 margin-left-xs"
          style="font-size: 30rpx;"
        >/ rɪˈzɔːrt /</view> -->
        </view>
        <view
          class="translate padding-top-lg"
          style="display: flex;"
        >
          <view
            class="ntranslate word-text-border"
            style="font-size: 30rpx; padding-left: 20rpx; "
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
              @save="onSave"
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

        <view
          class="flex_bet"
          style="padding: 80rpx 80rpx; display: flex; "
        >
          <view
            class="tab-t word-text-border "
            style="font-size: 40rpx; padding: 20rpx 48rpx; border-radius: 50upx;"
            @click="lastWord"
          >
            {{firstLoad ? '不记得' : '上一词'}}
          </view>

          <view
            class="tab-b word-text-border "
            style="font-size: 40rpx; padding: 20rpx 48rpx; border-radius: 50upx;"
            @click="nextWord"
          >
            {{lastLoad ? '已学习完成' :'下一词'}}
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
import { mapState, mapMutations } from 'vuex';
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
      lastLoad: false,
    }
  },
  onLoad() {
    this.todayWordList()
  },
  onShow() {

  },
  onUnLoad() {
    this.$refs.playWords.destroyAudio()
    this.$refs.playExample.destroyAudio()
  },
  components: { playWords, cuEditor },
  computed: {
    ...mapState(['wordList', 'wordId'])
  },
  methods: {
    ...mapMutations(['setWordList', 'setWordId']),
    blue() {

    },
    todayWordList() {
      this.$http.get('/WordLearn/todayWordScreening',
        {
          date: '2022-10-23',
        }).then(res => {
          this.setWordList(res.temp_word_list)
          this.setWordId(res.temp_word_list[0])
          this.todayWord(this.wordId)
          this.firstLoad = true
        })
    },
    todayWord(word_id) {
      this.firstLoad = this.wordList[0] == this.wordId
      this.lastLoad = this.wordId == this.wordList[this.wordList.length - 1]
      this.$http.get('/WordSystem/wordData',
        { word_id }).then(res => {
          this.wordObj = res
          this.wordObj.word_voice = `${base.wordVoiceUrl}${res.word_voice}`
          this.$nextTick(() => {
            this.$refs.playWords.creatAudio()
          })
        })
    },
    onSave() {
      console.log('富文本编辑器保存');
    },
    dbClickWord() {
      this.touchNumWord++
      setTimeout(() => {
        if (this.touchNumWord >= 2) {
          this.isEditorWord = true
        }
        this.touchNumWord = 0
      }, 250)
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

    lastWord() {
      if (this.firstLoad) {
        uni.navigateBack({
          delta: 1,//返回层数，2则上上页
        })
      } else {
        const wordId = (parseFloat(this.wordId) - 1).toString()
        this.toNewWord(wordId)
      }
    },
    nextWord() {
      const wordId = (parseFloat(this.wordId) + 1).toString()
      this.toNewWord(wordId)
    },
    toNewWord(wordId) {
      this.setWordId(wordId)
      this.todayWord(wordId)
    },
  }
}
</script>
<style lang="scss" scoped>
.today {
  background: #3d5cff;
  .all {
    margin: auto;
    width: 90%;
    // padding-left: 20rpx;
    .title {
      // padding-top: 150rpx;
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
    .tab-t {
      background: #627bff;
    }
    .tab-b {
      background: #627bff;
    }
  }
}
</style>
