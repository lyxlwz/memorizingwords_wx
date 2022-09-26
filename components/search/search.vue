<template>
  <view>
   <!-- <u-overlay
      :show="show"
      @click="close"
      opacity="0.9"
    > -->
 <u-overlay
      :show="show"
      opacity="0.9"
    >
      <view
        class="search"
        style=" margin: auto;
    padding-top: 90rpx;
    width: 90%;"
      >
       <view 
       style="background: white;border-radius: 20upx;padding: 20rpx;">
       	<u--input 
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
       				<view class="word-text-middle-1"  @click="close" style="font-size: 30rpx;">
       					取消
       				</view> 
       			</template>
       	</u--input>
       </view>
        <view style="padding: 30rpx; 20rpx">
          <view class="test-w-b word-text-border">
            查询结果
          </view>
          <u-list @scrolltolower="scrolltolower">
            <u-list-item
              v-for="(item, index) in indexList"
              :key="index"
            >
              <u-cell
                :title="item.name"
                :label="item.key"
                :titleStyle="{'font-size':'32rpx','color':'#FFFFFFCC'}"
              >
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
  name: "search",
  props: {
    show: {
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
          name: "word",
          key: "n. 单词，词汇"
        },
        {
          name: "apple",
          key: "n. 苹果"
        },
      ],
    }
  },
  methods: {
    close() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style>
::v-deep .u-search__content {
  border-radius: 10px !important;
}
</style>