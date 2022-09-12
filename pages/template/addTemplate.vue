<template>
	<view>
		<view class="hpage">
			<view class="search">
				<u-search shape="square" placeholder="请输入要查询的单词" bgColor="#ffff" height="90rpx" :showAction="false"
					v-model="keyword"></u-search>
				<!-- 间隔 -->
				<u-gap height="80rpx" bgColor="#3d5cff"></u-gap>

				<view class="tobe">
					<text class="text">今日待学习单词</text>
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
					<view class="aplan">
						<view class="train" @click="train">
							<view class="format">
								<view class="text" style="font-weight: 800; padding-bottom: 20px;">
								记忆训练
							</view>
							<view class="percentage">
								<view class="count">7</view>
								<view class="all" style="color: #afafaf">/10</view>
							</view>
							</view>
							
						</view>
						<view class="today" @click="today">
							<view class="format">
							<view class="text" style="font-weight: 800;padding-bottom: 20px;">
								今日单词学习
							</view>
							<view class="percentage">
								<view class="count">890</view>
								<view class="all" style="color: #afafaf">/1455</view>
							</view>
							</view>
						</view>
						<view class="lit" @click="lit">
							<view class="format">
							<view class="text" style="font-weight: 800;padding-bottom: 20px;">
								文献背诵
							</view>
							<view class="percentage">
								<view class="count">0</view>
								<view class="all" style="color: #afafaf">/0</view>
							</view>
							</view>
						</view>
						<view class="key" @click="key">
							<view class="format">
							<view class="text" style="font-weight: 800;">
								关键词背诵
							</view>
							<view class="percentage">
								<view class="count">0</view>
								<view class="all" style="color: #afafaf">/0</view>
							</view>
							</view>
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
				padding: 8px 8px;
				background: #FFFF;
				border-radius:20upx;
				

				.text {
					color: #afafaf;
					font-weight: 900;
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
					padding: 20px 20px 20px 60px;
					background: #FFFF;
					border-radius:20upx;
					.format{
						display:flex;
						.percentage {
							padding-left: 80px;
							display:flex;
							justify-content: flex-end
						
						}
					}
					
				}
			}
			.Proverbs{
				background: #efe0ff;
				border-radius:20upx;
				padding: 20px 20px;
		
			}
		}


	}

	
</style>
