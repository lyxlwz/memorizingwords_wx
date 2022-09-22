<template>
	<view >
		<u-overlay :show="show" @click="show = false" opacity="0.7">

		<view class="search" style="padding: 90rpx 30rpx;" >
			<u-search shape="square" placeholder="请输入要查询的单词" bgColor="#ffff" height="90rpx" :showAction="false"
				v-model="keyword"></u-search>
			<view style="padding: 30rpx; 20rpx">
				<view class="test-w-b word-text-border">
					查询结果
				</view>
				<u-list @scrolltolower="scrolltolower">
					<u-list-item v-for="(item, index) in indexList" :key="index">
						<u-cell :title="item.name" :label="item.key">
						</u-cell>
					</u-list-item>
				</u-list>
			</view>

		</view>
		</u-overlay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				show: true,
				indexList: [
					{
						name:"word",
						key:"n. 单词，词汇"
					},
					{
						name:"apple",
						key:"n. 苹果"
					},
				],
			}
		},
	
		methods: {
			scrolltolower() {
				this.loadmore()
			},
			}
	}
</script>

<style>
	::v-deep .u-search__content {
		border-radius: 10px !important;
	}
</style>
