<template>
  <view
    class="wordPageSty"
    style="height: 100%;"
  >
    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <view
      class="bg"
      style="height: 180rpx;background: #3d5cff;"
    >
      <view
        class="text test-w-b text-white"
        style="padding-top: 120rpx;font-size: 36rpx;"
      >
        单词管理
      </view>

    </view>
    <view class="search">
      <view class="inp">

        <u-input
          shape="square"
          clearable
          fontSize="32rpx"
          placeholderStyle="color:#3d5cff"
          height="90rpx"
          border="none"
          confirmType="search"
          v-model="searchVal"
          @clear="clearSearchVal"
          @confirm="confirmInput"
        >
          <template slot="prefix">
            <u--text
              prefixIcon="search"
              iconStyle="font-size: 50rpx;color: #d7d7d7"
              :text="`${searchCondition}:`"
              slot="prefix"
              margin="0 6rpx 0 0"
              bold
              size="32rpx"
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
              @close="close"
            >
              <view class="sys">
                <view
                  class="test-w-b"
                  style="padding: 40rpx 300rpx;"
                >设置</view>
                <view
                  class="lg "
                  style=" height: calc(600rpx - 50rpx);overflow: scroll;"
                >
                  <view v-if="firstLoad">
                    <view
                      class="test-w-b"
                      style="font-size: 100%;padding-left: 20rpx;"
                    >搜索条件</view>
                    <view class="u-page__tag-item flex text-center">
                      <u-tag
                        v-for="(item, index) in radios"
                        class="tag-item"
                        :key="index"
                        :text="item.name"
                        size="large"
                        :name="index"
                        :bgColor="item.checked ? '#3d5cff': '#d7d7d7'"
                        :borderColor="item.checked ? '#3d5cff' : '#d7d7d7'"
                        :color="item.checked ? '#FFFF':'#a6a6a6'"
                        @click="radioClick"
                      >
                      </u-tag>
                    </view>
                  </view>
                  <view v-else>
                    <!-- <view class="padding-top-lg">
                      <view
                        class="test-w-b"
                        style="font-size: 100%;padding-left: 20rpx;"
                      >选择</view>
                    </view>
                    <view class="u-page__tag-item-i flex text-center">
                      <u-tag
                        v-for="(aitem, index) in aradios"
                        class="atag-item "
                        :key="index"
                        :text="aitem.aname"
                        size="large"
                        :name="index"
                        :bgColor="aitem.checked ? '#3d5cff': '#d7d7d7'"
                        :borderColor="aitem.checked ? '#3d5cff' : '#d7d7d7'"
                        :color="aitem.checked ? '#FFFF':'#a6a6a6'"
                        @click="aradioClick"
                      >
                      </u-tag>
                    </view> -->
                    <view class="padding-top-lg">
                      <view
                        class="test-w-b"
                        style="font-size: 100%;padding-left: 20rpx;"
                      >表头选择</view>
                    </view>
                    <view class="u-page__tag-item-ii flex text-center">
                      <u-tag
                        v-for="(aitem, index) in yaradios"
                        class="yatag-item"
                        :key="index"
                        :text="aitem.aname"
                        size="large"
                        :name="index"
                        :bgColor="aitem.checked ? '#3d5cff': '#d7d7d7'"
                        :borderColor="aitem.checked ? '#3d5cff' : '#d7d7d7'"
                        :color="aitem.checked ? '#FFFF':'#a6a6a6'"
                        @click="yaradioClick"
                      >
                      </u-tag>
                    </view>
                    <view class="padding-top-lg">
                      <view
                        class="test-w-b"
                        style="font-size: 100%;padding-left: 20rpx;"
                      >批量修改为</view>
                    </view>
                    <view style="padding: 20rpx 50rpx;">
                      <view class="input">
                        <u--input
                          v-model="modVal"
                          border="none"
                          height="500"
                        ></u--input>
                      </view>
                    </view>
                  </view>

                </view>
                <view
                  class="butt"
                  style="display: flex;padding: 20rpx 50rpx;margin: auto;justify-content: space-between;"
                >
                  <button
                    type="info"
                    plain=true
                    iconColor="#3d5cff"
                    color="#3d5cff"
                    style="width: 40%;border-color:#3d5cff;color: #3d5cff;"
                    @click="no"
                  >取消</button>
                  <button
                    type="primary"
                    iconColor="#3d5cff"
                    size="large"
                    style="width: 55%; background: #3d5cff;"
                    @click="yes"
                  >确定</button>
                </view>

              </view>
            </u-popup>
            <u--image
              :src="src"
              width="40rpx"
              height="40rpx"
              @click="show = true"
            ></u--image>
          </template>

        </u-input>
      </view>
    </view>

    <!-- 列表-->
    <view class="u-page margin-top-lg">
      <u-list
        v-if="indexList.length > 0"
        @scrolltolower="scrolltolower"
        height="calc(70vh - 180rpx)"
        pagingEnabled
        :preLoadScreen="queryData.page * 4"
      >
        <u-list-item
          v-for="(item, index) in indexList"
          :key="index"
          class="test-w-b"
        >
          <u-cell @click="cellClick(item)">
            <view
              slot="title"
              class="flex word-text-middle-1 margin-right-lg"
              :class="[cellClass(item,index)]"
            >
              <view
                class="margin-right-lg "
                style="font-size: 30rpx;"
              >{{item.first_study_date}}</view>
              <view
                class=""
                style="font-size: 30rpx;"
              >{{item.word}}</view>
            </view>
            <view
              slot="value"
              class="word-text-middle-1"
              :class="[cellClass(item,index)]"
            >
              <view
                class="text-right "
                style="font-size: 30rpx;"
              >{{item.paraphrase}}</view>
            </view>
          </u-cell>
        </u-list-item>
      </u-list>
      <view
        v-else
        class="flex-center"
        style="height:calc(80vh - 180rpx)"
      >
        <u-empty>
        </u-empty>
      </view>
    </view>
    <z-navigation></z-navigation>
  </view>

</template>

<script>
export default {
  data() {
    return {
      all: '',
      src: '/static/word/sear.png',
      indexList: [],
      searchCondition: '今日学习单词',
      searchVal: 'Product Design',
      urls: [],
      show: false,
      yaradios: [{
        checked: false,
        aname: "首次学习日期",
        val: 'first_study_date'
      },
      {
        checked: false,
        aname: "单词",
        val: 'word'
      },
      {
        checked: false,
        aname: "释义",
        val: 'paraphrase'
      }],
      aradios: [{
        checked: false,
        aname: "全选",
      },
      {
        checked: false,
        aname: "已选单词",

      }],
      radios: [
        {
          checked: true,
          name: "今日学习单词",
          val: 'study_date',
        },
        {
          checked: false,
          name: "单词",
          val: 'word',
        },
        {
          checked: false,
          name: "释义",
          val: 'paraphrase',
        },
        {
          checked: false,
          name: "首次学习日期",
          val: 'first_study_date',
        },
        {
          checked: false,
          name: "学习日期",
          val: 'word',
        },
        {
          checked: false,
          name: "分组序号",
          val: 'group_id',
        },
      ],
      queryData: {
        count: 20,//单页数据条数
        page: 1,//页数
      },
      selDataIds: [],
      firstLoad: true,
      selConditions: {
        name: '今日学习单词',
        val: 'study_date'
      },
      modVal: '',
      modConditions: {
        name: '单词',
        val: 'word'
      },
      isSerach: false,
      serachList: [],
    }
  },
  //第一次加载
  onLoad(e) {
    this.manageapi()
    // 隐藏原生的tabbar
    uni.hideTabBar();
  },
  //页面显示
  onShow() {
    // 隐藏原生的tabbar
    uni.hideTabBar();
  },
  watch: {
    searchVal(val) {
      if (val) {
        this.queryData = {
          count: 20,
          page: 1,
        }
      }
    },
    modVal(val) {
      if (val) {
        this.queryData = {
          count: 20,
          page: 1,
        }
      }
    },
  },
  methods: {
    manageapi() {
      this.$http.get('/WordSystem/wordData',
        { wordList: 'all', ...this.queryData }).then(res => {
          let indexList = res.data.map((item, index) => {
            return {
              rowIndex: index,
              checked: false,
              ...item
            }
          })
          this.indexList.push(...indexList)
        });
    },
    yes() {
      if (this.firstLoad) {
        this.firstLoad = false;
        this.searchCondition = this.selConditions.name
        this.close()
      } else {
        this.indexList = []
        this.updateWord()
      }
    },
    updateWord() {
      if (this.selDataIds.length == 0) {
        this.$errorMsg('请选择单词!')
        return
      }
      this.$http.get('/WordSystem/wordUpdate',
        { [this.modConditions.val]: this.modVal, word_id: this.selDataIds.join(',') }).then(res => {
          if (this.isSerach) {
            this.confirmInput()
          } else {
            this.manageapi()
          }
          this.close()
          this.$successMsg('单词更新成功!')
        });
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
          this.selConditions = {
            name: item.name,
            val: item.val
          }
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
          this.modConditions = {
            name: aitem.name,
            val: aitem.val
          }
        }
      })

    },
    scrolltolower() {
      this.queryData.page += 1
      if (this.isSerach) {
        this.confirmInput()
      } else {
        this.manageapi()
      }
    },
    close() {
      this.show = false
    },
    clearSearchVal() {
      this.manageapi()
    },
    confirmInput() {
      this.serachList = []
      this.$http.post('/WordSystem/wordData',
        { [this.selConditions.val]: this.searchVal, ...this.queryData }).then(res => {
          this.isSerach = true
          if (res.data.length == 0) {
            this.indexList = this.serachList
          } else {
            let serachList = res.data.map((item, index) => {
              return {
                rowIndex: index,
                checked: false,
                ...item
              }
            })
            this.serachList.push(...serachList)
            this.indexList = this.serachList
          }

        });
    },
    cellClick(row) {
      this.$set(row, 'checked', !row.checked)
      if (row.checked) {
        this.selDataIds.push(row.id)
      } else {
        this.selDataIds.forEach((data, index) => {
          if (data === row.id) {
            this.selDataIds.splice(index, 1)
          }
        })
      }
    },
    cellClass(row, rowIndex) {
      if (row.checked && rowIndex === row.rowIndex) {
        return 'highlight-row'
      }
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
    border-radius: 20rpx;
    padding: 20rpx;
    background: #ede9fd;

    ::v-deep .u-input__content__field-wrapper__field {
      font-weight: bolder;
      height: 50rpx;
    }
  }
  // .u-page__tag-item {
  //   width: 230rpx;
  //   margin-right: 20px;
  //   padding: 20rpx;
  // }
  ::v-deep.u-tag--square {
    margin: 20rpx;
  }
  .u-page__tag-item {
    width: 100%;
    padding: 20rpx;
    flex-wrap: wrap;
    // justify-content: center;

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

    .yatag-item {
      width: 25%;
      margin-right: 5%;

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
  ::v-deep.u-cell__body {
    justify-content: space-between;
  }
  ::v-deep.u-cell__body__content {
    flex: none;
  }

  ::v-deep.u-line {
    border-bottom: 4rpx solid #b6b8b9 !important;
    width: auto !important;
    margin: 0 32rpx !important;
  }
}

.highlight-row {
  color: #3d5cff !important;
  font-weight: bold !important;
}
</style>
