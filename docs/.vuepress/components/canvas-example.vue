<template>
  <section>
    <button v-on:click="onPlay">{{text}}</button>
    <canvas id="canvas1" width="1000" height="440">Canvas not supported</canvas>
  </section>
</template>

<script>
module.exports = {
  data: function() {
    return {
      play: false,
      text: "播放"
    };
  },
  methods: {
    onPlay: function() {
      this.play = !this.play;
      if (this.play) {
        this.text = "停止";
      } else {
        this.text = "播放";
      }
    },
    calculateFps: function(now) {
      var fps = 1000 / (now - lastTime);
      lastTime = now;
      return fps;
    },
    animatation: function(now) {
      if (now === undefined) {
        now = +new Date();
      }
      fps = this.calculateFps(now);
      if (this.play) {
        this.erase();
        this.draw();
        //console.log("animate run: " + fps);
      }
      //console.log(this.play);
      requestAnimationFrame(this.animatation);
    },
    erase: function() {
      let canvas = document.getElementById("canvas1");
      context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    },
    draw: function() {
      let canvas = document.getElementById("canvas1");
      context = canvas.getContext("2d");
      context.save();

      skyOffset = skyOffset < canvas.width ? skyOffset + SKY_VELOCITY / fps : 0;

      grassOffset =
        grassOffset < canvas.width ? grassOffset + GRASS_VELOCITY / fps : 0;

      treeOffset =
        treeOffset < canvas.width ? treeOffset + TREE_VELOCITY / fps : 0;

      nearTreeOffset =
        nearTreeOffset < canvas.width
          ? nearTreeOffset + FAST_TREE_VELOCITY / fps
          : 0;

      context.save();
      context.translate(-skyOffset, 0);
      context.drawImage(sky, 0, 0);
      context.drawImage(sky, sky.width - 2, 0);
      context.restore();

      context.save();
      context.translate(-treeOffset, 0);
      context.drawImage(tree, 100, 240);
      context.drawImage(tree, 1100, 240);
      context.drawImage(tree, 400, 240);
      context.drawImage(tree, 1400, 240);
      context.drawImage(tree, 700, 240);
      context.drawImage(tree, 1700, 240);
      context.restore();

      context.save();
      context.translate(-nearTreeOffset, 0);
      context.drawImage(nearTree, 250, 220);
      context.drawImage(nearTree, 1250, 220);
      context.drawImage(nearTree, 800, 220);
      context.drawImage(nearTree, 1800, 220);
      context.restore();

      context.save();
      context.translate(-grassOffset, 0);

      context.drawImage(grass, 0, canvas.height - grass.height);

      context.drawImage(grass, grass.width - 5, canvas.height - grass.height);

      context.drawImage(grass2, 0, canvas.height - grass2.height);

      context.drawImage(grass2, grass2.width, canvas.height - grass2.height);
      context.restore();
    }
  },
  mounted: function() {
    let canvas = document.getElementById("canvas1");
    context = canvas.getContext("2d");
    controls = document.getElementById("controls");
    animateButton = document.getElementById("animateButton");
    tree = new Image();
    nearTree = new Image();
    grass = new Image();
    grass2 = new Image();
    sky = new Image();
    paused = true;
    lastTime = 0;
    lastFpsUpdate = { time: 0, value: 0 };
    fps = 60;
    skyOffset = 0;
    grassOffset = 0;
    treeOffset = 0;
    nearTreeOffset = 0;
    TREE_VELOCITY = 20;
    FAST_TREE_VELOCITY = 40;
    SKY_VELOCITY = 8;
    GRASS_VELOCITY = 75;
    context.font = "48px Helvetica";
    tree.src = "http://localhost:8080/resourse/smalltree.png";
    nearTree.src = "http://localhost:8080/resourse/tree-twotrunks.png";
    grass.src = "http://localhost:8080/resourse/grass.png";
    grass2.src = "http://localhost:8080/resourse/grass2.png";
    sky.src = "http://localhost:8080/resourse/sky.png";
    sky.onload = () => this.draw();
    window.requestAnimationFrame(this.animatation);
  }
};
</script>

<style scoped>
#canvas1 {
  left: 20px;
  top: 30px;
  background: #ffffff;
  cursor: crosshair;
  margin-left: 10px;
  margin-top: 10px;
  -webkit-box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}
</style>