<template>
	<view class="user">
		<view class="accout" style="padding: 100rpx 40rpx;">
			<view class="test-w-b" style="font-size: 50rpx;">
				Account
			</view>
			<view class="img flex_x_center" style="padding-top: 20rpx;">
				<img src="static/word/img.png">
			</view>
			<view class="flex_bet" v-for="i in item" style="padding-top: 40rpx;">
				{{i.name}} 
				<view >
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
				item:[
					{
						name:"已背单词数量",
						number:"9000"
				},
				{
						name:"目标单词数量",
						number:"20000"
				},
				{
						name:"数字训练最短时间",
						number:"00:00:30"
				}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.user{
	height: 80rpx;
	background: #3d5cff;
}
</style>
