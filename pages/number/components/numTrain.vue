<template>
  <view class="number-train text-lg text-white">
    <train-results v-if="isResults" />
    <train-process
      v-else
      @submit="submit"
    />
  </view>
</template>

<script>
import trainProcess from './process'
import trainResults from './results'
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
