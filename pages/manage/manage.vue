<template>
	<view class="wordPageSty">
		<!-- 公共组件-每个页面必须引入 -->
		<public-module></public-module>
		<z-navigation></z-navigation>
		<view class="bg" style="height: 90rpx;background: #3d5cff;">
			<view class="text" style="color: white;font-weight: 200%;padding-top: 20rpx;">
				单词管理
			</view>
				
		</view>
		<view class="search">
			<u-search shape="square" placeholder="今日单词学习" placeholderColor="#3d5cff" bgColor="#ebdffd" height="90rpx"
				:showAction="false" :clearabled="true"></u-search>
		</view>

		<!-- // 列表-->
		<view class="u-page padding-top-lg" >
			<u-list @scrolltolower="scrolltolower">
				<u-list-item v-for="(item, index) in indexList" :key="index" @click="click(index)">
					<u-cell :title="`2022-9-6     on`"  value="内容" >
		
					</u-cell>
				</u-list-item>
			</u-list>
		</view>
		</view>


	
</template>

<script>
	export default {


		data() {
			return {
				indexList: [],
				urls: [
					
				]
			}
		},
		onLoad() {
			this.loadmore()
		},
		methods: {
			click(index){
				console.log(index)
			},
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i <= 15; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, 1)]
					})
				}
			}
		}
	
	}
</script>
<style lang="scss" scoped>
	.search {
		margin: auto;
		padding-top: 20rpx;
		width: 90%;
		height: 42px;
	}
	.u-page{
		height: calc(100vh - 100rpx);
		overflow: scroll;
	}

	




</style>
