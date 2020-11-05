<template>
  <div class="galloping-audio-outer">
    <div class="main-outer">
      <div class="audio-container">
        <i class="iconfont icon-windowclose audio-arrow"></i>
        <div class="img-con">
          <img
            src="./res/song-img.jpg"
            :class="{ 'song-img': true, rotate: songMsg.isPlay }"
          />
        </div>
        <div class="right-con">
          <div class="song-title-con">
            <div class="song-title">{{ songMsg.name }}</div>
          </div>
          <div class="right-bottom-con">
            <i
              :class="{
                iconfont: true,
                'icon-pause': songMsg.isPlay,
                'icon-play': !songMsg.isPlay,
              }"
              @click="playHandler()"
            ></i>
            <div class="timeStart">{{ songMsg.currenTime }}</div>
            <div class="song-progress-line">
              <div class="song-progress-dot"></div>
            </div>
            <div class="timeEnd">{{ songMsg.totalTime }}</div>
            <i class="iconfont icon-volumehigh"></i>
          </div>
        </div>
      </div>
    </div>
    <audio class="song-souce" src="./res/AFootprintOfFeelings.mp3" loop></audio>
  </div>
</template>

<script>
import "./res/fonts/iconfont.css";
export default {
  data: () => ({
    songMsg: {
      name: "A Foot print Of Feelings –– Moonlit Sailor",
      totalTime: "03:23",
      currenTime: "00:00",
      isPlay: false,
    },
  }),
  mounted() {
    this.$audioSource = document.querySelector(".song-souce");
    this.$audioSource.volume = 0.01;
    this.$songTtile = document.querySelector(".song-title");
    this.$songImg = document.querySelector(".song-img");
  },
  methods: {
    startSongTitleMove() {
      let currenMarginLeft = this.$songTtile.style.marginLeft
        ? parseInt(this.$songTtile.style.marginLeft)
        : 0;
      this.$timer = setInterval(() => {
        if (currenMarginLeft >= -this.$songTtile.clientWidth) {
          currenMarginLeft -= 5;
        } else {
          currenMarginLeft = document.querySelector(".song-title-con")
            .clientWidth;
        }
        this.$songTtile.style.marginLeft = currenMarginLeft + "px";
      }, 100);
    },
    StopSongTitleMove() {
      clearInterval(this.$timer);
      this.$songTtile.style.marginLeft = 0 + "px";
    },
    imgRotate() {
      if (this.songMsg.isPlay) {
      } else {
      }
    },
    playHandler() {
      console.log("click");
      this.songMsg.isPlay = !this.songMsg.isPlay;
      if (this.songMsg.isPlay) {
        this.startSongTitleMove();
      } else {
        this.StopSongTitleMove();
      }
    },
  },
};
</script>

<style>
:root {
  --theme-color-1: #3eaf7c;
  --background: #222;
  --box-shadow-1: 0 1px 8px 0 rgba(0, 0, 0, 0.6);
}
html.dark {
}
html.light {
  --background: #fff;
  --box-shadow-1: 0 1px 8px 0 rgba(0, 0, 0, 0.3);
}

.timeStart,
.timeEnd {
  font-size: 12px;
}
.timeStart {
  margin-left: 5px;
}
.timeEnd {
  margin-right: 5px;
}
.icon-volumehigh,
.icon-pause,
.icon-play {
  font-size: 20px;
  cursor: pointer;
}
.galloping-audio-outer {
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 1rem;
  padding-left: 18rem;
  padding-right: 14rem;
  box-sizing: border-box;
  /* z-index: 99999; */
  user-select: none;
}
.audio-arrow {
  position: absolute;
  top: 5px;
  right: 5px;
  color: #8b8b8b;
  font-size: 14px;
}
.main-outer {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 0 1rem;
  box-sizing: border-box;
}
.audio-container {
  position: relative;
  margin: 0 auto;
  max-width: 860px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-radius: 5px;
  box-shadow: var(--box-shadow-1);
  background: var(--background);
}
.img-con {
  background: var(--background);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 100%;
}
.song-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
}
.right-con {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  justify-content: flex-end;
  position: relative;
}
.song-title-con {
  /* margin-bottom: 10px; */
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  top: 10px;
  width: 80%;
  box-sizing: border-box;
  margin-left: 50%;
  transform: translateX(-50%);
}
.song-title {
  font-size: 14px;
  margin-left: 0;
  width: fit-content;
}
.right-bottom-con {
  display: flex;
  margin-right: 25px;
  align-items: center;
  margin-bottom: 10px;
}

.song-progress-line {
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: #8b8b8b;
  margin: 0 6px;
  margin-top: 1px;
  position: relative;
}

.song-progress-dot {
  width: 8px;
  height: 8px;
  background: #3eaf7c;
  border-radius: 4px;
  position: absolute;
  top: -2px;
  left: 0px;
}

.rotate {
  -webkit-animation: rotate 15s infinite linear;
}

@-webkit-keyframes rotate {
  form {
    transform: rotate(0) infinite;
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1279px) {
  .galloping-audio-outer {
    padding-right: 0 !important;
  }
}

@media (max-width: 1055px) {
  .galloping-audio-outer {
    padding-left: 0 !important;
  }
}
</style>