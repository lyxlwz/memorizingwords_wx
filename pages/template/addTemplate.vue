<template>
	<view>
		<view class="hpage">
			<view class="search">
				<u-search shape="square" placeholder="请输入要查询的单词" bgColor="#ffff" height="90rpx" :showAction="false"
					v-model="keyword"></u-search>
				<!-- 间隔 -->
				<u-gap height="80rpx" bgColor="#3d5cff"></u-gap>

				<view class="tobe">
					<view class="text">今日待学习单词</view>
					<view class="number">
						201
					</view>
					<u-line-progress :percentage="30" :showText="false" height="10" activeColor="#f59b22">
					</u-line-progress>
				</view>
				<!-- 间隔 -->
				<u-gap height="40rpx" bgColor="#f5f5f5"></u-gap>

				<view class="plan">
					<text style="font-size: 130%;font-weight: 800;">学习计划</text>
					<u-gap height="10rpx" bgColor="#f5f5f5"></u-gap>
					<view class="aplan" style="">
					<view class="dark text-dark" v-for="i in list">
						<view class="name">{{i.name}}</view>  
						<view class="key" style="padding-left: 80rpx;">{{i.key}}</view> 
						<view class="all">{{i.all}}</view>
					</view>
						</view>
				</view>
				<u-gap height="40rpx" bgColor="#f5f5f5"></u-gap>
				<view class="Proverbs">
					<view class="big" style="font-weight: 800;font-size: 180%;padding-bottom: 10px;">
						箴言
					</view>
					<view class="Small" style="font-weight: 900;font-size: 80%;color: #afafaf;">
						人的一生中应该有三个爱好，一
						个帮助你赚钱，一个帮助你管理
					</view>
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
				list:[
				// 	{"记忆训练";"7"}
				// 	{"今日单词学习";"7"},
				// 	{"文献背诵";"7"},
				// 	{"关键词背诵";"7"}
				
					
					{name:"记忆训练",
					key:'7',
					all:'/10'},
					{name:'今日单词学习',
					key:'890',
					all:'/1455'},
					{name:'文献背诵',
					key:'0',
					all:'/0'},
					{name:'关键词背诵',
					key:'0',
					all:'/0'}
				],
				keyword: "shuru"
			};
		},
		//第一次加载
		onLoad(e) {
			// 隐藏原生的tabbar
			uni.hideTabBar();
		},
		//页面显示
		onShow() {
			// 隐藏原生的tabbar
			uni.hideTabBar();
		},
		//方法
		methods: {
			train() {
				console.log("1")
			},
			today() {
				console.log("2")
			},
			lit() {
				console.log("3")
			},
			key() {
				console.log("4")
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.hpage {
		height: 180px;
		background: #3d5cff;
	
	.search {
			margin: auto;
			padding-top: 45px;
			width: 349px;
			height: 42px;

			.tobe {
				// padding-top:30px;
				padding: 9px 9px;
				background: #FFFF;
				border-radius:20upx;
				box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);
				

				.text {
					color: #afafaf;
					font-weight: 900;
					margin-left:5px;
					font-size: 80%;
				}

				.number {
					padding: 1px 0;
					font-weight: 900;
					font-size: 160%;
				}
			}

			.plan {
				.aplan {
					padding: 20px 20px 20px 40px;
					background: #FFFF;
					border-radius:20upx;
					box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);
					
					.drak{
						// justify-content: flex-end
						display: flex;
						justify-content: space-between;
						// justify-content:space-between
					}
					// .format{
					// 	display:flex;
					// 	.percentage {
					// 		padding-left: 70px;
					// 		display:flex;
					// 		justify-content: flex-end
						
					// 	}
					// }
					
				}
			}
			.Proverbs{
				background: #efe0ff;
				box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);
				border-radius:20upx;
				padding: 20px 20px;
		
			}
		}


	}

	
</style>
