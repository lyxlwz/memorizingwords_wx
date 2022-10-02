<template>
  <view class="login">
    <!-- 公共组件-每个页面必须引入 -->
    <public-module></public-module>
    <view
      class="text"
      style="padding-top: 130rpx; padding-left: 50rpx;"
    >
      <view
        class="word-text-border test-w-b"
        style="font-size: 70rpx;"
      >
        登录
      </view>
      <view
        class="word-text-light-1"
        style="font-size: 30rpx; "
      >
        在下面输入你的秘钥
      </view>
    </view>
    <view
      class="input"
      style="padding: 190rpx 80rpx; "
    >
      <view
        class="word-text-middle test-w-b"
        style="font-size: 30rpx; "
      >
        秘钥
      </view>
      <view class="input_box">
        <input
          class="input_item"
          v-model="password"
          :password="!isSee"
          placeholder="请输入密码"
          placeholder-class="grey"
          @confirm="onSubmit"
        />
        <view @click="isSee = !isSee">
          <image
            v-if="isSee"
            src="../../static/icon/ic_logon_display.png"
            mode="aspectFit"
          ></image>
          <image
            v-else-if="!isSee"
            src="../../static/icon/ic_logon_hide.png"
            mode="aspectFit"
          ></image>
        </view>
      </view>

      <view style="padding-top: 80rpx;">
        <button
          @click="onSubmit"
          type="primary"
          class="btn"
        >登录</button>
      </view>
    </view>
  </view>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      password: '', //正确密码为123456
      isSee: false,
    }
  },
  //第一次加载
  onLoad(e) {
    this.logo = this.$base.logoUrl;
    // #ifdef APP-PLUS
    this.isIos = (plus.os.name == "iOS");
    let systemInfo = uni.getSystemInfoSync();
    this.system = parseFloat(systemInfo['system'].replace(/[a-zA-Z]/g, ""));
    this.isWeixin = plus.runtime.isApplicationExist({
      pname: 'com.tencent.mm',
      action: "weixin://"
    });
    // #endif
  },
  //页面显示
  onShow() { },
  methods: {
    ...mapMutations(['setUserInfo']),
    onSubmit() {
      if (!this.password) {
        uni.showToast({
          title: '请输入密码',
          icon: 'none'
        });
        return;
      }

      this.$http.post('/login/check',
        { key: this.password },
        {
          header: { //默认 无 说明：请求头
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }).then(res => {
          this.setUserInfo({ token: res });
          uni.showToast({
            title: '登录成功',
            duration: 2000,
            success: () => {
              uni.switchTab({
                url: '/pages/index/index'
              });
            }
          });
          this.getUserInfo()
        })
    },
    getUserInfo() {
      const date = new Date().format("yyyy-MM-dd");
      this.$http.get('/LearnPlan/learn_plan_search',
        { date }).then(res => {
          this.setUserInfo(res);
        })
    },
  }
}
</script>

<style lang="scss" scoped>
.input_box {
  display: flex;
  align-items: center;
  height: 104rpx;
  border-radius: 20rpx;
  border: 2rpx solid #dadbde;
  padding: 30rpx 40rpx;
  margin-top: 20rpx;
  image {
    width: 36rpx;
    height: 24rpx;
  }

  input {
    flex: 1;
    font-size: 28rpx;
    color: #333;
    height: 60rpx;
  }

  .input_item {
    font-size: 28rpx;
    border: 0rpx;
    flex: 1;
    height: 88rpx;
    width: 100%;
    outline: none;
    //margin-left: 32rpx;
  }

  .grey {
    color: #999999;
  }
}

.login {
  height: 360rpx;
  background: #3d5cff;
}

.btn {
  background: #3d5cff;
  border-radius: 20rpx;
  height: 90rpx;
  font-size: 35rpx;
}
</style>
