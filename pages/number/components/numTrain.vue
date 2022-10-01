<template>
  <view class="number-train text-lg text-white">
    <train-results v-if="isResults"
	 
	 :numObj = "numObj"
	 />
    <train-process
      v-else
      @submit="submit"
	  :id.sync = "id"
	  :date.sync = "date"
	  :number.sync = "number"
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
		  default:0
	  },
	  date: String,
	  id: [String,Number]
  },
  data() {
    return {
      isResults: false,
	  // upid:'',
	 numObj:{},
    }
  },

  computed: {},

  created() {

  },

  methods: {
    submit(val) {
      this.isResults = val.isFinite
		// console.log(this.upload_number,this.time_spent,val,'66666666666666666666')
	  
	  		  this.$http.post('/MemoryTraining/numberMemoryTraining',
	  		    { 
					upload_number:val.upload_number,
					id:this.id,
					time_spent:'01:02:100'
				},
	  		    {
	  		      header: { //默认 无 说明：请求头
	  		        // 'Content-Type': 'multipart/form-data; charset=UTF-8'
	  		      }
	  		    }).then(data =>{
					// this.accuracy = data.accuracy
					// this.random_number= data.random_number
					// this.time_spent= data.time_spent
					// this.upload_number= data.upload_number
					
					this.numObj = data
	  			  // console.log(this.random_number)
				  
	  		    })
	  			
	  
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
