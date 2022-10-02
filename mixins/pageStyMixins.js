import { _getTempClass } from "@/plugins/util";

export default {
  name: 'pageStyMixins',
  data() {
    return {
      wdheight: 0,
      themeSize: uni.getStorageSync('themeSizeClass') || "font-size-common",
      curThemeCLass: uni.getStorageSync('themeCLass') || 'simple',
    }
  },
  onLoad(e) {
    let _this = this;
    uni.getSystemInfo({
      success: function (res) {
        _this.wdheight = res.windowHeight + "px";
      }
    });
  },
  created() {

  },
  //显示页面的时候判断是否发生了 皮肤的切换
  onShow() {
    //如果字体变化了
    if (this.themeSize !== uni.getStorageSync('themeSizeClass')) {
      this.themeSize = uni.getStorageSync('themeSizeClass');
    }
    //如果主题变化了
    if (this.curThemeCLass !== uni.getStorageSync('themeCLass')) {
      this.curThemeCLass = uni.getStorageSync('themeCLass');
    }
  },
  computed: {
    iconColor() {
      return getFontColor();
    },
    pageSty() {
      let sty = {};
      sty["height"] = parseFloat(this.wdheight) + "px";
      sty["width"] = "100%";
      return sty;
    },
    //获取页面的追加class
    getTempClass() {
      return _getTempClass(this.themeSize, this.curThemeCLass);
    },
  },
  methods: {
    //计算文件大小
    fileSize(data) {
      let size = ""
      if (data == 0) {
        data = "0B";
      } else if (data < 1024) {
        data = data + "B";
      } else if (data < 1048576) {
        data = (data / 1024).toFixed(2) + "KB";
      } else if (data < 1073741824) {
        data = (data / 1048576).toFixed(2) + "MB";
      } else {
        data = (data / 1073741824).toFixed(2) + "GB";
      }
    },
    getFontColor() {
      return getFontColor();
    },
  }
}
