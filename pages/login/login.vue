<template>
	<view class="login">
		<view class="text" style="padding-top: 130rpx; padding-left: 50rpx;">
			<view class="word-text-border test-w-b" style="font-size: 70rpx;">
				登录
			</view>
			<view class="word-text-middle-1" style="font-size: 30rpx; ">
				在下面输入你的秘钥
			</view>
		</view>
		<view class="input" style="padding: 190rpx 80rpx; ">
			<view class="word-text-middle test-w-b" style="font-size: 30rpx; ">
				秘钥
			</view>
			<view style="padding-top: 10rpx;">
				<u--input
			  type="number"
			  :password= "password"
			  :focus="focus"
			    border="surround"
				:password-icon="passwordicon"
				fontSize="30rpx"
				style="height: 100rpx;"
			  ></u--input>
			</view>
			  
			  <view class="but" style="padding-top: 80rpx;">
			  	<button type="primary">登录</button>
			  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password: true,
				passwordicon: true,
				focus: true
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.login {
  height: 360rpx;
  background: #3d5cff;
  }

</style>
