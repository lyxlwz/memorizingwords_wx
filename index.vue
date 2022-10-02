<template>
  <view
    class="fontSizeSetting"
    :class="getTempClass"
    :style="pageSty"
  >
    <!--       全局组件 所有界面需要引入-->
    <public-module></public-module>
    <z-navigation></z-navigation>
    <view class="font-size-body">
      <view class="size-body">
        <view class="msg-text go-large-text">预览字体大小</view>
        <view class="msg-text-left go-large-text">拖动设置字体大小</view>
      </view>

      <view class="size-bar">
        <view class="text-bar flex_bet">
          <view>
            <go-icons
              type="goingziti"
              :color="iconColor"
              size="20"
            ></go-icons>
          </view>
          <view>
            <go-icons
              type="goingziti"
              :color="iconColor"
              size="30"
            ></go-icons>
          </view>
        </view>
        <view class="size-line-border">
          <view class="line"></view>
          <view class="line line1"></view>
          <view class="line line2"></view>
          <view class="line line3"></view>
          <view class="line line4"></view>
        </view>
        <view>
          <u-slider
            @changing="changedSize"
            :value="progressVal"
            :max="max"
            :min="min"
            :blockSize="26"
            blockColor="#fff"
            blockOuterColor="#fff"
            :step="20"
            :disabled="false"
            activeColor="#999"
          ></u-slider>
          <view class="font-size-label">
            <text class="go-large-text go-font-sub-color">标准</text>
          </view>
        </view>
      </view>
    </view>
  </view>

</template>

<script>
//界面样式mixins
import pageStyMixins from '@/pages/mixins/pageStyMixins';
export default {
  components: {
    GoIcons,
  },
  name: "index",
  mixins: [
    pageStyMixins
  ],
  created() {
    _changeToBlackHeader();
  },
  computed: {
    iconColor() {
      return getFontColor();
    },
    //获取页面的高度
    pageSty() {
      let sty = {};
      sty["height"] = parseFloat(this.wdheight) + "px";
      return sty;
    },
    //获取页面的追加class
    getTempClass() {
      const themeCLass = uni.getStorageSync('themeCLass') || "system";
      const themeSizeClass = uni.getStorageSync('themeSizeClass') || "";
      return [themeCLass, themeSizeClass, this.curValue, 'go-page-common'];
    },

  },
  onLoad() {
    let _this = this;
    uni.getSystemInfo({
      success: function (res) {
        _this.wdheight = res.windowHeight + "px";
      }
    });

  },
  data() {
    return {
      curValue: 20,
      fontSizeMapping: { '0': 'small', '20': 'common', '40': 'md', '60': 'md-sm', '80': 'md-bigger', '100': 'bigger' },
      max: 80,
      min: 0,
      step: 20,
      activeColor: '#00E3AB',
      progressVal: (() => {
        let curSize = uni.getStorageSync('themeSizeClass');
        if (curSize == null || curSize === "") {
          return 20;
        } else {
          let mapObj = { 'small': '0', 'common': '20', 'md': '40', 'md-sm': '60', 'md-bigger': '80', 'bigger': '100' };
          curSize = curSize.split("font-size-")[1];
          return parseInt(mapObj[curSize])
        }
      })(),
      theme: "1",
      themeList: [
        // {value:'1',label:"跟随系统"},
        { value: '2', label: "简约美" },
        { value: '3', label: "经典黑" }]
    }
  },
  methods: {
    changedSize(value) {
      this.curValue = value;
      uni.setStorageSync('themeSizeClass', 'font-size-' + this.fontSizeMapping[value + ""]);
    },
    onGroupChange(e) {
      console.log(e)
    },
    onObjConfirm(settingBare) {
      console.log(e)
    },
    onRadioClick(index) {
      this.$refs.listRadio[index].select()
    },
  }
}
</script>

<style lang="less">
.msg-text {
  padding: 10rpx 20rpx;
  border-radius: 10rpx;
  box-sizing: border-box;
  position: absolute;
  right: 20rpx;
  background-color: #fff;
  border: 1px solid var(--border-color);
}
.msg-text-left {
  padding: 10rpx 20rpx;
  border-radius: 10rpx;
  box-sizing: border-box;
  position: absolute;
  left: 20rpx;
  top: 140rpx;
  background-color: #fff;
  border: 1px solid var(--border-color);
}
/*黑色皮肤下的显示窗口信息*/
.black .size-body {
  background-color: #514e50;
  overflow: hidden;
  height: calc(100% - 100rpx);
  padding-top: 40rpx;
}
.size-body {
  overflow: hidden;
  height: calc(100% - 100rpx);
  padding-top: 40rpx;
}

.font-size-body {
  height: 100%;
}
.size-bar {
  background-color: var(--background-sub-color);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 30rpx 40rpx 60rpx 40rpx;
  box-sizing: border-box;
  border-top: 1px solid var(--border-color);
  overflow: hidden;
}
.settingBar {
  overflow: hidden;
  background-color: #fff;
}
.size-line-border {
  display: flex;
  position: relative;
  top: 28rpx;
}
.size-line-border .line {
  height: 22rpx;
  width: 4rpx;
  background-color: #999;
}

.line1 {
  margin-left: 24%;
}
.line2 {
  margin-left: 25%;
}
.line3 {
  margin-left: 24%;
}
.line4 {
  margin-left: 25%;
}
.font-size-label {
  position: relative;
  left: 20%;
}

::v-deepuni-slider {
  margin: 12rpx 0 !important;
}
</style>
