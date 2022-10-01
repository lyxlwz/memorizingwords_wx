<template>
  <view class='circlePage'>
    <view class='wrap'>
      <canvas
        :canvas-id='canvasId'
        :style="{height:width+'rpx',width:width+'rpx'}"
        class="progress"
      ></canvas>
      <canvas
        :style="{height:width+'rpx',width:width+'rpx'}"
        :canvas-id="`${canvasId}_p`"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      wid: 200,
      r: 33,
    }
  },
  props: {
    total: {
      type: [String, Number],
      default: 1,
    },
    num: {
      type: [String, Number],
      default: 1,
    },
    //线条的宽度
    lineBgWidth: {
      type: [String, Number],
      default: 6,
    },
    //边框背景颜色
    bgColor: {
      type: String,
      default: '#F0F0F0',
    },
    //线条的宽度
    lineWidth: {
      type: [String, Number],
      default: 6,
    },
    //边框背景颜色
    activeColor: {
      type: String,
      default: '#009DFF',
    },
    canvasId: {
      type: String,
      default: 'canvas',
    },
    radius: {
      type: [String, Number],
      default: 33,
    },
    //线条的宽度
    width: {
      type: [String, Number],
      default: 200,
    },
  },

  mounted() {
    this.wid = uni.getSystemInfoSync().windowWidth / 375 * this.width
    this.r = uni.getSystemInfoSync().windowWidth / 375 * this.radius
    const data = {
      total: this.total,
      num: this.num,
    }
    this.drawCircleBg(this.canvasId, data);
  },
  methods: {
    drawCircleBg(prefix, data) {
      var that = this;
      //创建并返回绘图上下文context对象。
      let cxt_arc = uni.createCanvasContext(prefix, this);
      cxt_arc.setLineWidth(this.lineBgWidth); //线条的宽度
      cxt_arc.setStrokeStyle(this.bgColor);//边框颜色
      cxt_arc.setLineCap('round');
      cxt_arc.beginPath();
      // 参数分别：圆心的x坐标；圆心的y坐标；圆半径；起始弧度，单位弧度（在3点钟方向）；终止弧度；弧度的方向是否是逆时针
      cxt_arc.arc(this.wid / 4, this.wid / 4, this.r, 0, 2 * Math.PI, false);//创建一条弧线
      cxt_arc.stroke(); //对当前路径进行描边
      cxt_arc.draw();
      that.drawCirclePg(prefix, data);
    },
    //绘制橙色进度条
    drawCirclePg(prefix, data) {
      //创建并返回绘图上下文context对象。
      let cxt_arc = uni.createCanvasContext(prefix + '_p', this);
      let value
      if (parseFloat(data.total) == 0) {
        value = 0.01
      } else {
        value = (data.num / data.total) * 2;
      }
      cxt_arc.setLineWidth(this.lineWidth);
      cxt_arc.setStrokeStyle(this.activeColor);
      cxt_arc.setLineCap('round');
      cxt_arc.beginPath();
      cxt_arc.arc(this.wid / 4, this.wid / 4, this.r, -0.5 * Math.PI, Math.PI * (value - 0.5), false);
      cxt_arc.stroke();
      cxt_arc.draw();
    },
  }
}
</script>

<style lang="scss" scoped>
.circlePage {
  // background: #00b26a;
  // padding: 20rpx 0;
}
.wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.circleText {
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.progress {
  position: absolute;
}
</style>