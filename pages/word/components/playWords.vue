<template>
  <view>
    <!-- 测试而已 -->
  </view>
</template>

<script>
export default {
  name: 'playWords',
  components: {},
  mixins: [],
  data() {
    return {
      innerAudioContext: null,
    };
  },
  props: {},
  created() {
    this.creatAudio()
  },

  mounted() {

  },

  computed: {},


  methods: {
    //录音实例
    creatAudio() {
      this.innerAudioContext = uni.createInnerAudioContext();//创建实例
      this.innerAudioContext.autoplay = true;//设置是否自动播放
      this.innerAudioContext.loop = true;
      this.innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
      this.innerAudioContext.onPlay(() => {
        // 播放监听
        console.log('播放!');
        this.audioPlay = true;
      });
      this.innerAudioContext.onPause(() => {
        // 暂停监听
        console.log('暂停播放!');
        this.audioPlay = false

      });
      this.innerAudioContext.onEnded(() => {
        // 结束播放监听
        console.log('播放结束!');
        this.audioPlay = false;
        //自动切换事件
        this.qeihuanwenjian()
      });
    },
    // 录音暂停播放
    changePlayState() {
      if (this.audioPlay == false) {
        this.innerAudioContext.play();
      } else {
        this.innerAudioContext.pause()
      }
    },
    // 文件切换播放
    filechange(item, i) {
      this.innerAudioContext.destroy()
      this.csdFileindex = i;
      this.recordPath = item.recordPath;
      this.sliderMax = this.getTime(item.recordDuration);
      this.timeStr = this.getTime(item.recordDuration);
      this.creatAudio()
    },
    // 自动播放下一个文件
    qeihuanwenjian() {
      let index = this.csdFileindex + 1;
      if (index < this.luyinList.length) {
        this.csdFileindex = index;
        let item = this.luyinList[this.csdFileindex];
        let i = this.csdFileindex;
        this.filechange(item, i)
      }
    },
  }
}

</script>
<style lang='scss' scoped>
</style>