<template>
  <view>
    <view
      class="footer_box"
      :class="{ footer_bg: bg }"
    >
      <view
        v-for="(item, index) of navigationList"
        :key="index"
        class="footer_item"
      >
        <view
          v-if="item.raised"
          class="footer_raised_item"
          @click="onRaised"
        >
          <view class="footer_raised_item_bg">
            <image
              class="footer_raised_item_image"
              :src="'/' + item.iconPath"
              mode="aspectFit"
            ></image>
          </view>
        </view>
        <view
          v-else
          class="footer_nav_item"
          @click="onPageJump(item.pagePath)"
        >
          <image
            v-if="item.pagePath == path"
            class="footer_nav_item_image"
            :src="'/' + item.selectedIconPath"
            mode="aspectFit"
          ></image>
          <image
            v-else
            class="footer_nav_item_image"
            :src="'/' + item.iconPath"
            mode="aspectFit"
          ></image>
          <text
            class="footer_nav_item_text"
            :class="[item.pagePath == path ? 'footer_nav_item_text_active' : '']"
          >{{ item.text }}</text>
        </view>
      </view>
    </view>
    <view
      v-if="bg"
      class="footer_station"
    ></view>
    <search :show.sync="popupShow"></search>
    <!-- <z-popup
      v-model="popupShow"
      type="center"
    >
      <view class="popup_content">

      </view>
    </z-popup> -->
  </view>
</template>
<script>
export default {
  props: {
    bg: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      path: '',
      navigationList: [
        {
          pagePath: 'pages/index/index',
          iconPath: 'static/icon/tab/icon_home.png',
          selectedIconPath: 'static/icon/tab/icon_home_c.png',
          text: 'Home'
        },
        {
          pagePath: 'pages/course/course',
          iconPath: 'static/icon/tab/icon_manage.png',
          selectedIconPath: 'static/icon/tab/icon_manage_c.png',
          text: 'Course'
        },
        {
          pagePath: 'pages/search/search',
          iconPath: 'static/icon/tab/icon_search.png',
          text: 'Search',
          raised: true
        },
        {
          pagePath: 'pages/manage/manage',
          iconPath: 'static/icon/tab/icon_course.png',
          selectedIconPath: 'static/icon/tab/icon_course_c.png',
          text: 'Manage'
        },
        {
          pagePath: 'pages/account/account',
          iconPath: 'static/icon/tab/icon_account.png',
          selectedIconPath: 'static/icon/tab/icon_account_c.png',
          text: 'Account'
        }
      ],
      popupShow: false
    };
  },
  //第一次加载
  created() {
    //获取所有页面
    let currentPages = getCurrentPages();
    let page = currentPages[currentPages.length - 1];
    this.path = page.route;
  },
  //方法
  methods: {
    onPageJump(url) {
      if (this.path !== url) {
        uni.switchTab({
          url: '/' + url
        });
      }
    },
    onRaised() {
      this.popupShow = true;
      this.$emit('onRaised', true)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/mixin.scss";
.footer_station {
  // height: 100rpx;
  box-sizing: content-box;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.footer_box {
  box-shadow: 20rpx 0rpx 20rpx 20rpx rgba(0, 0, 0, 0.1);
  height: $footer-height;
  position: fixed;
  bottom: 1%;
  left: 2%;
  width: 96%;
  border-radius: 20rpx;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  z-index: 502;
  box-sizing: content-box;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.footer_bg {
  background-color: #fff;
}
.footer_item {
  position: relative;
  flex: 1;
}
.footer_nav_item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.footer_nav_item:active {
  background-color: rgba($color: #fff, $alpha: 0.1);
}
.footer_nav_item_text {
  font-size: 24rpx;
  color: #999999;
  margin-top: 6rpx;
  font-weight: bold;
}
.footer_nav_item_text_active {
  color: #3d5cff;
}
.footer_nav_item_image {
  width: 50rpx;
  height: 50rpx;
}
.footer_raised_item {
  position: absolute;
  top: -40rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 120rpx;
  height: 120rpx;
  background-color: #fff;
  border-radius: 50%;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &_bg {
    padding: 26rpx;
    background-color: #f5f7ff;
    border-radius: 50%;
  }
}
.footer_raised_item_image {
  width: 50rpx;
  height: 50rpx;
}
.popup_content {
  background-color: #fff;
  padding: 30rpx;
}
</style>
