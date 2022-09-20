<template>
  <view class="login">
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
        class="word-text-middle-1"
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
      <view style="padding-top: 10rpx;">
        <!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->

        <u--input
          type="number"
          :password="password"
          :focus="focus"
          border="surround"
          fontSize="30rpx"
          style="height: 100rpx;border-radius: 20rpx;"
        >
          <template slot="suffix">
            <view @click="password = !password">
              <u-icon
                v-show="!password"
                name="eye-fill"
                color="#909399"
                size="28"
              ></u-icon>
              <u-icon
                v-show="password"
                name="eye-off"
                color="#909399"
                size="28"
              ></u-icon>
            </view>
          </template>
        </u--input>
      </view>

      <view style="padding-top: 80rpx;">
        <button
          type="primary"
          class="btn"
        >登录</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      password: true,
      passwordicon: true,
      focus: true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 360rpx;
  background: #3d5cff;
}

.btn {
  background: #3d5cff;
  border-radius: 20rpx;
}
</style>
