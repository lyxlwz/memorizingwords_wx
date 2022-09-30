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
	  number: Number,
	  data: String,
	  id: Number
  },
  data() {
    return {
      isResults: false,
	  upload_number:'',
	  upid:'',
	  time_spent:''
    }
  },

  computed: {},

  created() {

  },

  methods: {
    submit(val) {
      this.isResults = val
	  this.$emit('update:number', false)
	  this.$emit('update:data', false)
	  this.$emit('update:id', false)
	  
	  		  this.$http.get('/MemoryTraining/numberMemoryTraining',
	  		    { 
					upload_number:this.upload_number,
					id:this.upid,
					time_spent:this.time_spent
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
