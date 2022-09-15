<template>
	<view class="result">
		<view>
			<u-navbar
			bgColor="#3d5cff"
			leftIconColor="#cbcdce"
			            @rightClick="rightClick"
			            :autoBack="true"
			        >
			        </u-navbar>
		</view>
		<view class="all">
			<view class="title">resort</view>
			<u-button class="custom-style" type="primary" icon="map" size="mini" text="英" ></u-button>
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
				
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
.result{
	height: 100vh;
	background: #3d5cff;
	.all{
		margin: auto;
		width: 90%;
		.title{
		padding-top: 150rpx;
		color: white;
		padding-left: 20rpx;
		font-size: 100rpx;
		font-weight: 200%;
		.custom-style{
			// margin: 0 200rpx;
			width: 50rpx;
		}
	}
	}
	
}
</style>
