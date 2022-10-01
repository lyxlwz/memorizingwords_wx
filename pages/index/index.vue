<template>
	<!-- 这里直接引用即可 wordPageSty -->
	<view class="wordPageSty">
		<view class="hpage">
			<view class="search">
				<view @click="tosearch" 
				style="background: white;border-radius: 20upx;padding: 20rpx;">
					<u-input 
					shape="square" 
					placeholder="请输入要查询的单词" 
					placeholderStyle="font-size: 40rpx;"
					clearable
					height="90rpx"
					border="none" 
					confirmType="search" 
					prefixIcon="search"
					prefixIconStyle="font-size: 60rpx;color: #909399"
					@confirm="confirmInput">
					
							<template slot="suffix">
								<view class="word-text-middle-1" style="font-size: 30rpx;">
									取消
								</view> 
							</template>
					</u-input>
				</view>

				<view class="tobe" @click="tobe">
					<view class="title">今日待学习单词</view>
					<view class="number margin-tb-xs">
						{{toword}}
					</view>
					<u-line-progress :percentage="per" :showText="false" height="10" activeColor="#f59b22">
					</u-line-progress>
				</view>

				<view class="plan padding-top-lg">
					<text style="font-size: 100%;font-weight: 800;">学习计划</text>
					<view class="aplan margin-top-sm">
						<view class="train">
							<view class="format" v-for="(plan, index) in planList" :key="index"
								@click="planItem(plan,index)">
								<view class="title flex">
									<circle-progress :canvasId="`canvas${index}`" active-color="#009DFF"
										:total="plan.planTotalNum" :num="plan.planNum" :radius="12" :width="66">
									</circle-progress>
									<text class="margin-left-sm test-w-b flex_y_center">{{plan.planName}}</text>
								</view>
								<view class="percentage test-w-b flex_y_center">
									<view class="count">{{plan.planNum}}</view>
									<view class="all" style="color: #afafaf">/{{plan.planTotalNum}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
					<view class="Proverbs margin-top-lg flex-row" :style="{'background':bgColor}">
					<view>
						<view class="big "
							style="font-weight: 800;font-size: 130%;color: #4d5156; padding-bottom: 10px;">
							箴言
						</view>
						<view class="Small test-w-b word-text-middle" style="font-size: 80%;">
							{{text}}
						</view>
					</view>
					<img :src="imgUrl" alt=""  style="border-radius:50%; height: 90%; width: 60%;">
				</view>
				
				

			</view>

		</view>
		<search :show.sync="pop"></search>
		<!-- 公共组件-每个页面必须引入 -->
		<public-module></public-module>
		<z-navigation></z-navigation>
	</view>
</template>

<script>
	import circleProgress from '@/components/circle-progress/circle-progress'
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				keyword: '',
				text: '',
				bgColor: '',
				imgUrl: '',
				per:'',
				day:'2022-9-21',
				pop: false,
				toword:'',
				planList: [{
						planName: '记忆训练',
						planNum: 7,
						planTotalNum: 10,
					},
					{
						planName: '今日单词学习',
						planNum: 890,
						planTotalNum: 1455,
					},
					{
						planName: '文献背诵',
						planNum: 0,
						planTotalNum: 0,
					},
					{
						planName: '关键词背诵',
						planNum: 0,
						planTotalNum: 0,
					},
				],
			};
		},
		computed: {
		  ...mapState(['userInfo']),
		  per(){
			  return ((this.planList[1].planNum / this.planList[1].planTotalNum)*100)
			  
		  }
		},
		components: {
			circleProgress,
		},
		//第一次加载
		onLoad(e) {
			// 隐藏原生的tabbar
			uni.hideTabBar();
			this.getData()
			this.api()
			this.toapi()
		},
		//页面显示
		onShow() {
			// 隐藏原生的tabbar
			uni.hideTabBar();
		},
		//方法
		methods: {
			api() {
				this.$http.get('/Aphorism/aphorism_search').then(data => {
					console.log(data, '成功返回参数')
					this.text = data.aphorism
					this.bgColor = data.color
					// this.imgUrl = ''
					this.imgUrl = data.picture
				})
			},
			toapi(){
				this.planList[0].planNum = this.userInfo.screening_number || 0
				this.planList[1].planNum = this.userInfo.screening_words || 0
				this.planList[0].planTotalNum = this.userInfo.today_number_target || 0
				this.planList[1].planTotalNum = this.userInfo.today_word_target || 0
				this.toword = this.userInfo.today_word_target || 0
				
				
				

			},
			planItem(plan, index) {
				if (index === 0) {
					uni.navigateTo({
						url: '/pages/number/number'
					});
				} else if (index === 1) {
					uni.navigateTo({
						url: '/pages/word/today'
					});
				}
			},
			tobe() {
				uni.navigateTo({
					url: '/pages/word/today'
				});
			},
			getData() {},
			tosearch() {
				this.pop = true;
			},
		}
	}
</script>
<style lang="scss" scoped>
	.hpage {
		height: 450rpx;
		background: #3d5cff;

		.search {
			margin: auto;
			padding-top: 170rpx;
			width: 90%;
			height: 500rpx;

			.tobe {
				margin-top: 80rpx;
				// padding-top:30px;
				padding: 20rpx;
				background: #ffff;
				border-radius: 20upx;
				box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);

				.title {
					color: #afafaf;
					font-weight: 900;
					// margin-left: 5px;
					font-size: 80%;
				}

				.number {
					padding: 2rpx 0;
					// font-weight: 900;
					font-weight: bold;
					font-size: 110%;
				}
			}

			.plan {
				.aplan {
					padding: 40rpx;
					background: #ffff;
					border-radius: 20upx;
					box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);

					.format {
						display: flex;
						justify-content: space-between;
						font-size: 90%;

						.percentage {
							display: flex;
							// justify-content: flex-end;
						}
					}

					.format:not(:last-child) {
						padding-bottom: 20rpx;
					}
				}
			}

			.Proverbs {
				box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);
				border-radius: 20upx;
				padding: 40rpx 40rpx;
				height: 300rpx;
			}
		}
	}

	::v-deep .u-search__content {
		border-radius: 10px !important;
	}
</style>
