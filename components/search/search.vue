<template>
  <u-overlay
    :show="show"
    opacity="0.9"
  >
    <view
      class="search"
      style="padding-top: 170rpx;margin: 0 5%;"
    >
      <view style="background: white;border-radius: 20upx;padding: 20rpx;">
        <u-input
          shape="square"
          placeholder="请输入要查询的单词"
          placeholderStyle="font-size: 30rpx;"
          @clear="clearall"
          clearable
          height="90rpx"
          border="none"
          :focus="boo"
          confirmType="search"
          v-model="keyword"
          prefixIcon="search"
          prefixIconStyle="font-size: 60rpx;color: #909399"
          @confirm="confirmInput"
        >

          <template slot="suffix">
            <view
              class="word-text-middle-1"
              @click="close"
              style="font-size: 30rpx;"
            >
              取消
            </view>
          </template>
        </u-input>
      </view>
      <view
        style="padding: 30rpx 0"
        v-if="indexList.length > 0"
      >
        <view class="test-w-b word-text-border">
          查询结果
        </view>
        <u-list
          @scrolltolower="scrolltolower"
          height="calc(80vh - 180rpx)"
          style="overflow: scroll"
          pagingEnabled
          :preLoadScreen="queryData.page * 4"
        >
          <u-list-item
            v-for="(item, index) in indexList"
            :key="index"
          >
            <u-cell
              @click="word(item)"
              :title="item.word"
              :label="item.paraphrase"
              :titleStyle="{'font-size':'32rpx','color':'#FFFFFFCC'}"
            >
            </u-cell>
          </u-list-item>
        </u-list>
      </view>

    </view>
  </u-overlay>
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
      indexList: [],
      boo: true,
      queryData: {
        count: 20,//单页数据条数
        page: 1,//页数
      },
      // indexList: [
      //   {
      //     name: "word",
      //     key: "n. 单词，词汇"
      //   },
      // ],
    }
  },
  methods: {
    close() {
      this.$emit('update:show', false)
    },

    confirmInput() {
      this.$http.get('/WordSystem/wordData',
        {
          word: this.keyword,
          ...this.queryData
        }).then(data => {
          if (data.data.length == 0 && data.current_page === 1) {
            this.indexList = []
            this.$errorMsg('暂无该单词，请重新输入')
            return
          }
          this.indexList.push(...data.data)
        });

    },
    scrolltolower() {
      this.queryData.page = this.queryData.page + 1
      this.confirmInput()
    },
    clearall() {
      this.keyword = '',
        this.indexList = []
    },
    word(word) {
      uni.navigateTo({
        url: `/pages/word/results?id=${word.id}`
      });
    }
  }
}
</script>

<style>
::v-deep .u-search__content {
  border-radius: 10px !important;
}

::v-deep .u-cell__body {
  padding: 10px 0 !important;
}
</style>