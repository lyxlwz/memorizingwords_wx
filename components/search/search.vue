<template>
	<view >
		<u-overlay :show="show" @click="close" opacity="0.7">
		
	
		<view class="search" style=" margin: auto;
    padding-top: 90rpx;
    width: 90%;" >
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
		name:"search",
		props:{
			show:{
			type: Boolean,
			default: true,
			}
			
		},
		data() {
			return {
				keyword: '',
				// show: vshow,
				// show: true,
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
		methods:{
			close() {
				this.$emit('update:show',false) 
			}
		}
	}
</script>

<style>
::v-deep .u-search__content {
		border-radius: 10px !important;
	}
</style>