<template>
  <div :class="{ test: true, 'small-size-outer': !isOpen }">
    <div class="audio-window small-size-img-outer">
      <img src="./res/song-img.jpg" class="song-img small-size-img" />

      <div class="controls-outer">
        <div class="song-title">
          <div class="innerP">A Foot print Of Feelings -Moonlit Sailor</div>
        </div>

        <div class="controls-btn-progress-outer">
          <i
            v-bind:class="{
              iconfont: true,
              'icon-pause': isPlay,
              'icon-play': !isPlay,
            }"
            @click="playHandler"
          ></i>
          <div class="time">{{ playTime }}</div>
          <div class="controls-progress-line" @mousedown="proMouseDownHandler">
            <div class="controls-progress-dot"></div>
          </div>
          <div class="time">{{ durationTime }}</div>
        </div>

        <i class="iconfont icon-windowclose close-btn" @click="closeAudio"></i>
      </div>
    </div>

    <audio class="song-souce" src="./res/AFootprintOfFeelings.mp3" loop></audio>

    <div
      :class="{ 'small-control': true, 'hide-btn': isOpen }"
      @click="openAudio"
    >
      <i class="iconfont icon-musicnote"></i>
    </div>
  </div>
</template>

<script>
import "./res/fonts/iconfont.css";

export default {
  data: () => ({
    isPlay: false,
    isOpen: false,
    playTime: "00:00",
    durationTime: "03:23",
  }),
  methods: {
    playHandler() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.autoTitleMove();
        this.$audio.play();

        this.$playTimer = setInterval(() => {
          let currentTime = parseInt(this.$audio.currentTime);
          let min = parseInt(currentTime / 60);
          let second = parseInt(currentTime % 60);
          if (min < 10) {
            min = "0" + min;
          }
          if (second < 10) {
            second = "0" + second;
          }
          this.playTime = min + ":" + second;
        }, 1000);
      } else {
        this.stopTitleMove();
        this.$audio.pause();
        clearInterval(this.$playTimer);
      }
    },
    autoTitleMove() {
      let titleDom = document.querySelector(".song-title>.innerP");
      let currentML = 0;
      this.$timer = setInterval(() => {
        if (currentML > -222) {
          currentML -= 3;
        } else {
          currentML = 250;
        }
        titleDom.style.marginLeft = currentML + "px";
      }, 100);
    },
    stopTitleMove() {
      clearInterval(this.$timer);
      // let titleDom = document.querySelector(".song-title>.innerP");
      // titleDom.style.marginLeft = 0 + "px";
    },
    openAudio() {
      this.isOpen = true;
    },
    closeAudio() {
      this.isOpen = false;
    },
    proMouseDownHandler(e) {
      let target = e.target;
      let flag = e;
      let mousemove = (e) => {
        console.log(e.x, target.offsetWidth);
      };
      let mouseup = () => {
        document.removeEventListener("mousemove", mousemove);
      };
      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", mouseup);
    },
    moveHandler() {},
    mouseupHandler() {},
  },
  mounted() {
    this.$audio = document.querySelector(".song-souce");
    this.$audio.volume = 0.05;
  },
};
</script>

<style>
:root {
  --theme-color-1: #3eaf7c;
  --background: #222;
  --box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
}

html.light {
  --background: #fff;
  --box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
}
.test {
  position: fixed;
  bottom: 5.5rem;
  right: 0px;
  user-select: none;
  transition: all 0.3s ease-in-out;
  box-shadow: var(--box-shadow);
  background: var(--background);
}
.small-size-outer {
  right: -355px;
}

.audio-window {
  width: 350px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background: --background;
}

.song-img {
  width: 64px;
  height: 64px;
  margin-right: 5px;
  position: relative;
}

.song-title {
  font-size: 12px;
  width: 240px;
  white-space: nowrap;
  margin-bottom: 5px;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 50%;
  transform: translateX(-55%);
}
.time {
  font-size: 10px;
}

.icon-pause,
.icon-play {
  font-size: 20px;
  margin-right: 5px;
  cursor: pointer;
}
.icon-volumehigh {
  font-size: 20px;
  margin-left: 5px;
  cursor: pointer;
}
.innerP {
  display: inline-block;
}

.controls-outer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 0;
  padding-right: 10px;
}

.controls-title-outer {
  display: flex;
  width: 100%;
}

.controls-btn-progress-outer {
  width: 100%;
  display: flex;
  align-items: center;
}

.controls-progress-line {
  width: 100%;
  height: 4px;
  background: #ccc;
  margin: 0 10px;
  position: relative;
  border-radius: 1px;
  cursor: pointer;
  position: relative;
  margin-top: 1px;
}
.controls-progress-dot {
  position: relative;
  width: 8px;
  height: 8px;
  background: #3eac7a;
  position: absolute;
  left: -4px;
  top: -2px;
  border-radius: 50%;
  cursor: pointer;
}
.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 13px;
  cursor: pointer;
}

.small-control {
  width: 40px;
  height: 40px;
  background: --background;
  position: absolute;
  left: -61px;
  bottom: 0px;
  box-shadow: var(--box-shadow);
  line-height: 40px;
  text-align: center;
  border-radius: 0.25rem;
}
.small-control > i {
  font-size: 26px;
  color: #3eaf7c;
  opacity: 1;
  transition: all 0.3s ease-in-out;
}
.hide-btn {
  visibility: hidden;
  opacity: 0;
}
</style>
