<template>
  <view class="number-train text-lg text-white">
    <train-results v-if="isResults" />
    <train-process
      v-else
      @submit="submit"
    />

    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <z-navigation></z-navigation>
  </view>
</template>

<script>
import trainProcess from './components/process'
import trainResults from './components/results.vue'
export default {
  name: 'numTrain',
  components: { trainProcess, trainResults },
  mixins: [],
  props: {},
  data() {
    return {
      isResults: false
    }
  },

  computed: {},

  created() {

  },

  methods: {
    submit(val) {
      this.isResults = val
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
