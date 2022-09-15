<template>
  <view class="wordPageSty">
    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <view
      class="bg"
      style="height: 90rpx;background: #3d5cff;"
    >
      <view
        class="text"
        style="color: white;font-weight: 200%;padding-top: 20rpx;"
      >
        单词管理
      </view>

    </view>
    <view class="search">
      <u--input
        shape="square"
        placeholder="今日单词学习"
        clearable
        placeholderStyle="color:#3d5cff"
        bgColor="#ebdffd"
        height="90rpx"
        prefixIcon="search"
        prefixIconStyle="font-size: 22px;color: #909399"
      >

        <template slot="suffix">
          <u-popup
            :show="show"
            mode="bottom"
            :round="10"
            :closeable="true"
            closeIconPos="top-left"
            :closeOnClickOverlay="false"
            @open="open"
            @close="close"
          >
            <view
              class="sys"
              style="height: 1000rpx;width: 90%;"
            >
              <view style="padding: 40rpx 300rpx;">设置</view>
              <view style="font-size: 120%;font-weight: 500;padding-left: 20rpx;">搜索条件</view>
              <view class="u-page__tag-item flex text-center">
                <u-tag
                  v-for="(item, index) in radios"
                  class="tag-item text-center"
                  :key="index"
                  :text="item.name"
                  size="large"
                  :name="index"
                  :bgColor="item.bgColor"
                  :borderColor="item.borderColor"
                  :color="item.color"
                  @click="radioClick"
                >
                </u-tag>
              </view>
            </view>
          </u-popup>
          <u-button @click="show = true">打开</u-button>
        </template>

      </u--input>
    </view>

    <!-- // 列表-->
    <view class="u-page padding-top-lg">
      <u-list @scrolltolower="scrolltolower">
        <u-list-item
          v-for="(item, index) in indexList"
          :key="index"
          @click="click(index)"
        >
          <u-cell
            :title="`2022-9-6     on`"
            value="内容"
          >

          </u-cell>
        </u-list-item>
      </u-list>
    </view>
    <z-navigation></z-navigation>
  </view>

</template>

<script>
export default {
  data() {
    return {
      indexList: [],
      urls: [],
      show: false,
      radios: [{
        checked: false,
        name: "单词",
        bgColor: "#d7d7d7",
        borderColor: "#d7d7d7",
        color: "#a6a6a6",
      },
      {
        checked: false,
        name: "释义",
        bgColor: "#d7d7d7",
        borderColor: "#d7d7d7",
        color: "#a6a6a6",
      },
      {
        checked: false,
        name: "学习日期",
        bgColor: "#d7d7d7",
        borderColor: "#d7d7d7",
        color: "#a6a6a6",
      }
      ],

    }
  },
  //第一次加载
  onLoad(e) {
    this.loadmore()
    // 隐藏原生的tabbar
    uni.hideTabBar();
  },
  //页面显示
  onShow() {
    // 隐藏原生的tabbar
    uni.hideTabBar();
  },
  methods: {
    radioClick(name) {
      this.radios.forEach((item, index) => {
        if (index === name) {
          // 如果被选中再点一次就被取消了
          item.checked = !item.checked
        } else {
          item.checked = false
        }

        if (item.checked) {
          item.bgColor = "#3d5cff"
          item.borderColor = "#3d5cff"
          item.color = "#FFFF"
        } else {
          item.bgColor = "#d7d7d7"
          item.borderColor = "#d7d7d7"
          item.color = "#a6a6a6"
        }
      })

    },
    click(index) {
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
    },
    open() {
      // console.log('open');
    },
    close() {
      this.show = false
      // console.log('close');
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
  // .u-page__tag-item {
  //   width: 230rpx;
  //   margin-right: 20px;
  //   padding: 20rpx;
  // }

  .u-page__tag-item {
    width: 100%;
    padding: 20rpx;
    .tag-item {
      width: 30%;
      margin-right: 5%;
      // display: flex;
      // align-items: center;
    }
  }
}

.u-page {
  height: calc(100vh - 100rpx);
  overflow: scroll;
}
</style>
