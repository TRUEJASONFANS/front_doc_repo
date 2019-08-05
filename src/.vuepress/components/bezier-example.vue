<template>
  <section>
    <canvas id="bezier_canvas" width="600" height="400">Canvas not supported</canvas>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {},
  mounted: function() {
    let bezier_canvas= document.getElementById("bezier_canvas");
    let ctx = bezier_canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 200); //起始点
    var cp1x = 40, cp1y = 100;  //控制点
    var x = 200, y = 200; // 结束点
    //绘制二次贝塞尔曲线
    ctx.quadraticCurveTo(cp1x, cp1y, x, y);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.rect(10, 200, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();

    ctx.strokeStyle = `rgb(255, 87, 51)`
    ctx.beginPath();
    ctx.moveTo(340, 200); //起始点
    var cp1x = 320, cp1y = 100;  //控制点1
    var cp2x = 400, cp2y = 120;  //控制点2
    var x = 500, y = 200; // 结束点
    //绘制二次贝塞尔曲线
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = `rgb(255, 87, 51)`
    ctx.rect(340, 200, 10, 10);
    ctx.rect(cp1x, cp1y, 10, 10);
    ctx.rect(cp2x, cp2y, 10, 10);
    ctx.rect(x, y, 10, 10);
    ctx.fill();

  }
});
</script>
<style>
#bezier_canvas {
  left: 20px;
  top: 30px;
  background: #ffffff;
  border:2px solid black !important;
  cursor: crosshair;
  margin-left: 10px;
  margin-top: 10px;
  -webkit-box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}
</style>
