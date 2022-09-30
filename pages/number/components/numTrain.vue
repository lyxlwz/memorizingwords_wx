<template>
  <view class="number-train text-lg text-white">
    <train-results v-if="isResults" />
    <train-process
      v-else
      @submit="submit"
	  :id.sync = "id"
	  :data.sync = "data"
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
		 type: Number,
		  default:0
	  },
	  data: String,
	  id: String
  },
  data() {
    return {
      isResults: false,
	  upload_number:'',
	  // upid:'',
	  time_spent: '01:02:100'
    }
  },

  computed: {},

  created() {

  },

  methods: {
    submit(val) {
      this.isResults = val.isResults
	  this.$emit('update:number', false)
	  this.$emit('update:data', false)
	  this.$emit('update:id', false)
		console.log(this.upload_number,this.time_spent,val,'66666666666666666666')
	  
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
	  		  	//   this.id = data.id,
	  			  // this.data = data.data,
	  			  // this.number = data.random_number
	  			  // console.log(this.id,this.data,this.number)
	  		    })
	  			
	  
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
