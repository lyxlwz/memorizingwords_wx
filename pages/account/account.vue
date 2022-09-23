<template>
  <view class="user">
    <z-nav-bar
      :backState="1000"
      :homeState="1000"
      bgColor="#3d5cff"
    ></z-nav-bar>
    <view
      class="accout"
      style="padding: 100rpx 40rpx;"
    >
      <view
        class="test-w-b"
        style="font-size: 50rpx;"
      >
        Account
      </view>
      <view class="img flex_x_center padding-top-sm">
        <img src="static/word/img.png">
      </view>
      <view
        class="flex_bet test-w-b text-xl padding-top-lg  margin-top-lg"
        v-for="(i,index) in item"
        :key="index"
      >
        {{i.name}}
        <view>
          {{i.number}}
        </view>

      </view>
    </view>
    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <z-navigation></z-navigation>
  </view>
</template>

<script>
export default {
  data() {
    return {
		day:"2020-6-3",
      item: [
        {
          name: "已背单词数量",
          number: "9000"
        },
        {
          name: "目标单词数量",
          number: "20000"
        },
        {
          name: "数字训练最短时间",
          number: "00:00:30"
        }
      ]
    }
  },
  //第一次加载
  onLoad(e) {
    // 隐藏原生的tabbar
    uni.hideTabBar();
	this.api()
  },
  //页面显示
  onShow() {
    // 隐藏原生的tabbar
    uni.hideTabBar();
  },
  methods: {
	  api(){
		  this.$http.get('/LearnPlan/learn_plan_search',
		  { date: this.day},
		  {
		    header: { //默认 无 说明：请求头
		      // 'Content-Type': 'multipart/form-data; charset=UTF-8'
		    }
		  }).then(data =>{
		  	console.log(data,'成功返回参数')
			this.item[0].number = data.today_number_target
			this.item[1].number = data.screening_number
			this.item[2].number = data.screening_words

		  })
	  }

  }
}
</script>

<style lang="scss" scoped>
.user {
  //   height: 80rpx;
  //   background: #3d5cff;
}
</style>
