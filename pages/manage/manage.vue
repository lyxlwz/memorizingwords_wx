<template>
  <view
    class="wordPageSty"
    style="height: 100%;"
  >
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
      <view class="inp">

        <u--input
          shape="square"
          placeholder=""
          clearable
          placeholderStyle="color:#3d5cff"
          height="90rpx"
          border="none"
          confirmType="search"
          v-model="searchVal"
          @confirm="confirmInput"
        >
          <template slot="prefix">
            <u--text
              prefixIcon="search"
              iconStyle="font-size: 44rpx;color: #d7d7d7"
              text="今日单词学习:"
              slot="prefix"
              margin="0 3px 0 0"
              bold
              color="#3753E5"
            ></u--text>
          </template>
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
                style="height: 1000rpx;width: 100%;
			  "
              >
                <view class="test-w-b" style="padding: 40rpx 300rpx;">设置</view>
                <view
                  class="lg "
                  style=" height: calc(800rpx - 50rpx);
    overflow: scroll;"
                >
                  <view class="test-w-b" style="font-size: 100%;padding-left: 20rpx;">搜索条件</view>
                  <view class="u-page__tag-item flex text-center">
                    <u-tag
                      v-for="(item, index) in radios"
                      class="tag-item"
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
                  <view class="padding-top-lg">
                    <view class="test-w-b" style="font-size: 100%;padding-left: 20rpx;">选择</view>
                  </view>
                  <view class="u-page__tag-item-i flex text-center">
                    <u-tag
                      v-for="(aitem, index) in aradios"
                      class="atag-item "
                      :key="index"
                      :text="aitem.aname"
                      size="large"
                      :name="index"
                      :bgColor="aitem.bgColor"
                      :borderColor="aitem.borderColor"
                      :color="aitem.color"
                      @click="aradioClick"
                    >
                    </u-tag>
                  </view>
                  <view class="padding-top-lg">
                    <view class="test-w-b" style="font-size: 100%;padding-left: 20rpx;">表头选择</view>
                  </view>
                  <view class="u-page__tag-item-ii flex text-center">
                    <u-tag
                      v-for="(aitem, index) in yaradios"
                      class="yatag-item"
                      :key="index"
                      :text="aitem.aname"
                      size="large"
                      :name="index"
                      :bgColor="aitem.bgColor"
                      :borderColor="aitem.borderColor"
                      :color="aitem.color"
                      @click="yaradioClick"
                    >
                    </u-tag>
                  </view>
                  <view class="padding-top-lg">
                    <view class="test-w-b" style="font-size: 100%;padding-left: 20rpx;">批量修改为</view>
                  </view>
                  <view style="padding: 20rpx 50rpx;">
                    <view class="input">
                      <u--input
                        border="none"
                        @change="change"
                        height="500"
                      ></u--input>
                    </view>
                  </view>

                </view>
                <view
                  class="butt"
                  style="display: flex;
			  padding: 20rpx 80rpx;
			  margin: auto;
			  justify-content: space-between;"
                >
                  <button
                    type="primary"
                    plain=true
                    style="width: 40%;"
                    @click="no"
                  >取消</button>
                  <button
                    type="primary"
                    iconColor="#3d5cff"
                    size="large"
                    style="width: 55%;"
                    @click="yes"
                  >确定</button>
                </view>

              </view>
            </u-popup>
            <!-- <image @click="show = true" url></image> -->
            <u--image
              :src="src"
              width="40rpx"
              height="40rpx"
              @click="show = true"
            ></u--image>
          </template>

        </u--input>
      </view>
    </view>

    <!-- 列表-->
    <view class="u-page margin-top-lg">
      <u-list
        @scrolltolower="scrolltolower"
        height="calc(80vh - 180rpx)"
      >
        <u-list-item
          v-for="(item, index) in indexList"
          :key="index"
          @click="click(index)"
          class="test-w-b"
        >
          <u-cell value="在...中;关于">
            <view
              slot="title"
              class="flex word-text-middle-1"
            >
              <view class="margin-right-lg">{{title}}</view>
              <view>{{title1}}</view>
            </view>
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
      src: '/static/word/sear.png',
      indexList: [],
      searchVal: 'Product Design',
      title: "2022-9-6",
      title1: "on",
      urls: [],
      show: false,
      yaradios: [{
        checked: false,
        aname: "首次学习日期",
        bgColor: "#d7d7d7",
        borderColor: "#d7d7d7",
        color: "#a6a6a6",
      },
      {
        checked: false,
        aname: "分组序号",
        bgColor: "#d7d7d7",
        borderColor: "#d7d7d7",
        color: "#a6a6a6",
      },
      {
        checked: false,
        aname: "最后筛查日期",
        bgColor: "#d7d7d7",
        borderColor: "#d7d7d7",
        color: "#a6a6a6",

      }],
      aradios: [{
        checked: false,
        aname: "全选",
        bgColor: "#d7d7d7",
        borderColor: "#d7d7d7",
        color: "#a6a6a6",
      },
      {
        checked: false,
        aname: "已选单词",
        bgColor: "#d7d7d7",
        borderColor: "#d7d7d7",
        color: "#a6a6a6",

      }],
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
        name: "首次学习日期",
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
      },
      {
        checked: false,
        name: "分组序号",
        bgColor: "#d7d7d7",
        borderColor: "#d7d7d7",
        color: "#a6a6a6",
      },
      {
        checked: false,
        name: "今日学习单词",
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
    yes() {
      this.close()
    },
    no() {
      this.close()
    },
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
    aradioClick(aname) {
      this.aradios.forEach((aitem, index) => {
        if (index === aname) {
          // 如果被选中再点一次就被取消了
          aitem.checked = !aitem.checked
        } else {
          aitem.checked = false
        }

        if (aitem.checked) {
          aitem.bgColor = "#3d5cff"
          aitem.borderColor = "#3d5cff"
          aitem.color = "#FFFF"
        } else {
          aitem.bgColor = "#d7d7d7"
          aitem.borderColor = "#d7d7d7"
          aitem.color = "#a6a6a6"
        }
      })

    },
    yaradioClick(aname) {
      this.yaradios.forEach((aitem, index) => {
        if (index === aname) {
          // 如果被选中再点一次就被取消了
          aitem.checked = !aitem.checked
        } else {
          aitem.checked = false
        }

        if (aitem.checked) {
          aitem.bgColor = "#3d5cff"
          aitem.borderColor = "#3d5cff"
          aitem.color = "#FFFF"
        } else {
          aitem.bgColor = "#d7d7d7"
          aitem.borderColor = "#d7d7d7"
          aitem.color = "#a6a6a6"
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
    },
    confirmInput() {
      console.log('进行搜索')
    },

  }

}
</script>
<style lang="scss" scoped>
.search {
  // background: #ffaaff;
  margin: auto;
  padding-top: 30rpx;
  width: 90%;
  height: 100rpx;
  .inp {
    border-radius: 20upx;
    padding: 20rpx;
    background: #ede9fd;

    ::v-deep .uni-input-input {
      font-weight: bolder;
    }
  }
  // .u-page__tag-item {
  //   width: 230rpx;
  //   margin-right: 20px;
  //   padding: 20rpx;
  // }

  .u-page__tag-item {
    width: 100%;
    padding: 20rpx;
    flex-wrap: wrap;
    justify-content: center;
    .tag-item {
      width: 25%;
      margin-right: 5%;
      margin-top: 2%;
      display: flex;
      align-items: center;
    }
  }
  .u-page__tag-item-i {
    width: 100%;
    padding: 20rpx;
    flex-wrap: wrap;
    margin-left: 4%;
    .atag-item {
      width: 25%;
      margin-right: 5%;

      margin-top: 2%;
      // display: flex;
      align-items: center;
    }
  }
  .u-page__tag-item-ii {
    width: 100%;
    padding: 20rpx;
    flex-wrap: wrap;
    margin-left: 4%;
    .yatag-item {
      width: 25%;
      margin-right: 5%;

      margin-top: 2%;
      // display: flex;
      // align-items: center;
    }
  }
  .input {
    padding: 20rpx 50rpx;
    height: 100rpx;
    background: #ffffff;
    border-radius: 20upx;
    box-shadow: 20rpx 20rpx 20rpx 0 rgba(0, 0, 0, 0.1);
  }
}

.u-page {
  ::v-deep.u-cell__value {
    color: #b6b8b9;
  }

  ::v-deep.u-line {
    border-bottom: 4rpx solid #b6b8b9 !important;
  }
}
</style>
