<template>
  <section>
    <canvas id="canvas2" width="600" height="200">Canvas not supported</canvas>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {},
  mounted: function() {
    let canvas2= document.getElementById("canvas2");
    let ctx = canvas2.getContext("2d");
    ctx.fillRect(10, 10, 100, 50); //绘制矩形,填充的默认颜色为黑色
    ctx.strokeRect(10, 70, 100, 50); //绘制矩形边框
  }
});
</script>
<style>
#canvas2 {
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
