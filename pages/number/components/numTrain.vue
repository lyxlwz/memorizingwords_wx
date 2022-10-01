<template>
  <view class="number-train text-lg text-white">
    <train-results
      v-if="isResults"
      :numObj="numObj"
    />
    <train-process
      v-else
      @submit="submit"
      :number="number"
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
  props: {
    number: {
      type: String,
      default: 0
    },
    date: String,
    word_id: [String, Number]
  },
  data() {
    return {
      isResults: false,
      // upid:'',
      numObj: {},
    }
  },

  computed: {},

  created() {

  },

  methods: {
    submit(val) {
      this.isResults = val.isFinite
      this.$http.post('/MemoryTraining/numberMemoryTraining',
        {
          upload_number: val.upload_number,
          id: this.word_id,
          time_spent: val.time_spent
        }).then(data => {
          this.numObj = data
        })


    }
  }
}

</script>
<style lang='scss' scoped>
</style>
