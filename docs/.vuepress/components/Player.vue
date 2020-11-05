<template>
  <div class="galloping-audio-outer show">
    <div class="main-outer">
      <div class="audio-container">
        <div class="audio-arrow-outer" @click="closeMusicBar">
          <i class="iconfont icon-windowclose audio-arrow"></i>
        </div>
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
              @click="playHandler"
            ></i>
            <div class="timeStart">{{ songMsg.currenTime }}</div>
            <div
              class="song-progress-line"
              @mousedown="progressMouseDownHandler"
              @click="progressClickHandler"
            >
              <div class="song-progress-active">
                <div class="song-progress-dot"></div>
              </div>
            </div>
            <div class="timeEnd">{{ songMsg.totalTime }}</div>
            <i class="iconfont icon-volumehigh" @click="volumeCilck"></i>
          </div>
        </div>
        <div
          :class="{
            'volume-bar-outer': true,
            show: isShowVolumeBar,
            hidden: !isShowVolumeBar,
          }"
          @mousedown="volumeMouseDown"
          @click="volumeBarClick"
        >
          <div class="volume-active"></div>
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
      totalTime: "03:22",
      currenTime: "00:00",
      isPlay: false,
    },
    isShowVolumeBar: false,
    isShowMusicBar: false,
  }),
  mounted() {
    this.$audioSource = document.querySelector(".song-souce");
    this.$audioSource.volume = 0.03;
    this.$songTtile = document.querySelector(".song-title");
    this.$songImg = document.querySelector(".song-img");
    let volumeActive = document.querySelector(".volume-active");
    volumeActive.style.width = this.$audioSource.volume * 100 + "%";
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
    playHandler() {
      // this.songMsg.isPlay = !this.songMsg.isPlay;
      if (this.songMsg.isPlay) {
        this.startSongTitleMove();
        this.playMusic();
      } else {
        this.pauseMusic();
        this.StopSongTitleMove();
      }
    },
    progressMouseDownHandler(e) {
      let progressLine = document.querySelector(".song-progress-line");
      let active = document.querySelector(".song-progress-active");
      let obj = progressLine.getBoundingClientRect();
      let precent;
      let isFirstMouseup = true;
      let mousemove = (e) => {
        let activeWidth = e.clientX - obj.left;
        if (activeWidth <= 0) {
          activeWidth = 0;
        } else if (activeWidth > obj.width) {
          activeWidth = obj.width;
        }
        precent = activeWidth / obj.width;
        active.style.width = precent * 100 + "%";
      };
      this.mousemove = mousemove;
      let mouseup = () => {
        if (isFirstMouseup) {
          try {
            isFirstMouseup = false;
            this.$audioSource.currentTime =
              this.$audioSource.duration * precent;
            document.removeEventListener("mousemove", mousemove);
            document.removeEventListener("mouseup", mouseup);
          } catch (error) {}
        }
      };
      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", mouseup);
    },
    progressClickHandler(e) {
      document.removeEventListener("mousemove", this.mousemove);
      let progressLine = document.querySelector(".song-progress-line");
      let active = document.querySelector(".song-progress-active");
      let obj = progressLine.getBoundingClientRect();
      let activeWidth = e.clientX - obj.left;
      if (activeWidth <= 0) {
        activeWidth = 0;
      } else if (activeWidth > obj.width) {
        activeWidth = obj.width;
      }
      let precent = activeWidth / obj.width;
      active.style.width = precent * 100 + "%";
      this.$audioSource.currentTime = this.$audioSource.duration * precent;
    },
    volumeCilck() {
      this.isShowVolumeBar = !this.isShowVolumeBar;
    },
    closeMusicBar(e) {
      let musicBar = document.querySelector(".galloping-audio-outer");
      musicBar.classList.remove("show");
      musicBar.classList.add("hidden");
    },
    volumeMouseDown() {
      let volumeBar = document.querySelector(".volume-bar-outer");
      let volumeActive = document.querySelector(".volume-active");
      let volumeBarPositionObj = volumeBar.getBoundingClientRect();

      let mousemove = (e) => {
        let volumeActiveWidth = e.clientX - volumeBarPositionObj.x;
        if (volumeActiveWidth <= 0) {
          volumeActiveWidth = 0;
        } else if (volumeActiveWidth > volumeBarPositionObj.width - 8) {
          volumeActiveWidth = volumeBarPositionObj.width - 8;
        }
        volumeActive.style.width = volumeActiveWidth + "px";
        let percent = parseFloat(
          volumeActiveWidth / volumeBarPositionObj.width
        );
        this.$audioSource.volume = percent;
      };
      let mouseup = (e) => {
        document.removeEventListener("mousemove", mousemove);
      };
      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", mouseup);
    },
    volumeBarClick(e) {
      let volumeBar = document.querySelector(".volume-bar-outer");
      let volumeActive = document.querySelector(".volume-active");
      let volumeBarPositionObj = volumeBar.getBoundingClientRect();
      let volumeActiveWidth = e.clientX - volumeBarPositionObj.x;
      if (volumeActiveWidth <= 0) {
        volumeActiveWidth = 0;
      } else if (volumeActiveWidth > volumeBarPositionObj.width - 8) {
        volumeActiveWidth = volumeBarPositionObj.width - 8;
      }
      volumeActive.style.width = volumeActiveWidth + "px";
      let percent = parseFloat(volumeActiveWidth / volumeBarPositionObj.width);
      this.$audioSource.volume = percent;
    },
    playMusic() {
      let progressActive = document.querySelector(".song-progress-active");
      this.$audioSource.play();
      this.$songSourceTimer = setInterval(() => {
        let min = parseInt(this.$audioSource.currentTime / 60);
        let second = parseInt(this.$audioSource.currentTime % 60);
        if (min < 10) {
          min = "0" + min;
        }
        if (second < 10) {
          second = "0" + second;
        }
        this.songMsg.currenTime = min + ":" + second;
        let widt =
          (this.$audioSource.currentTime / this.$audioSource.duration) * 100;
        progressActive.style.width = widt + "%";
      }, 1000);
    },
    pauseMusic() {
      this.$audioSource.pause();
      clearInterval(this.$songSourceTimer);
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
  width: 43px;
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
  font-size: 20px !important;
  cursor: pointer !important;
}

.galloping-audio-outer {
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 1rem;
  padding-left: 18rem !important;
  padding-right: 14rem !important;
  box-sizing: border-box;
  user-select: none !important;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 99999;
}
.audio-arrow-outer {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 999999;
}
.audio-arrow {
  color: #8b8b8b !important;
  font-size: 14px !important;
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
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
  margin: 8px !important;
  border: 2px solid #3eaf7c;
}
.right-con {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-end;
  position: relative;
}
.song-title-con {
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  top: 15px;
  width: 80%;
  box-sizing: border-box;
  margin-left: 50%;
  transform: translateX(-50%);
}
.song-title {
  font-size: 14px !important;
  margin-left: 0;
  width: fit-content !important;
}
.right-bottom-con {
  display: flex;
  margin-right: 25px;
  align-items: center;
  margin-bottom: 10px;
}

.song-progress-line {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #8b8b8b;
  margin: 0 10px;
  margin-top: 1px;
  position: relative;
  cursor: pointer;
}
.song-progress-active {
  width: 0%;
  height: 100%;
  border-radius: 3px;
  background: #3eaf7c;
  position: relative;
  left: 0;
}

.song-progress-dot {
  width: 10px;
  height: 10px;
  background: #3eaf7c;
  border-radius: 5px;
  position: absolute;
  top: -2px;
  right: -4px;
}

.volume-bar-outer {
  position: absolute;
  width: 150px;
  height: 15px;
  right: 0;
  top: -20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
  padding: 4px;
  box-sizing: border-box;
  background: var(--background);
  box-shadow: var(--box-shadow-1);
  cursor: pointer;
}
.volume-active {
  border-radius: 3px;
  width: 50px;
  height: 100%;
  background: #3eaf7c;
}

.show {
  opacity: 1;
  visibility: visible;
}

.hidden {
  opacity: 0;
  visibility: hidden;
  z-index: -99999;
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