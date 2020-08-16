<template>
  <section>
    <canvas id="path_canvas" width="600" height="400">Canvas not supported</canvas>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {},
  mounted: function() {
    let path_canvas= document.getElementById("path_canvas");
    let ctx = path_canvas.getContext("2d");
    ctx.beginPath(); //新建一条path
    ctx.moveTo(50, 50); //把画笔移动到指定的坐标
    ctx.lineTo(200, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
    //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
    ctx.closePath();
    ctx.stroke(); //绘制路径。
 

    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(300, 150);
    ctx.lineTo(250, 300);
   
    ctx.fill(); //填充闭合区域。如果path没有闭合，则fill()会自动闭合路径。

  }
});
</script>
<style>
#path_canvas {
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
