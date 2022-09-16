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

    };
  },
  props: {},

  mounted() {
    const innerAudioContext = uni.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.loop = true;
    innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
    innerAudioContext.onPlay(() => {
      console.log('开始播放');
    });
    innerAudioContext.onEnded((res) => {
      console.log('自然结束', res);
    });
    innerAudioContext.onError((res) => {
      console.log(res.errMsg);
      console.log(res.errCode);
    });
  },

  computed: {},


  methods: {}
}

</script>
<style lang='scss' scoped>
</style>