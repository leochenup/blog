<template>
  <div class="show-arrow" @click="musicBtnClick" v-show="!isLoad">
    <i class="iconfont icon-musicnote"></i>
  </div>
</template>

<script>
import "./res/fonts/iconfont.css";

export default {
  data() {
    return {
      isLoad: true,
    };
  },
  mounted() {
    setTimeout(() => {
      let audioSource = document.querySelector(".song-souce");
      audioSource.addEventListener("canplay", () => {
        this.isLoad = false;
        console.log("加载完成.....");
      });
    });
  },
  methods: {
    musicBtnClick() {
      let musicBar = document.querySelector(".galloping-audio-outer");

      if (musicBar.classList.contains("hidden")) {
        musicBar.classList.remove("hidden");
        musicBar.classList.add("show");
      } else {
        musicBar.classList.remove("show");
        musicBar.classList.add("hidden");
      }
    },
  },
};
</script>

<style>
.icon-musicnote {
  color: #3eaf7c !important;
  font-size: 20px;
}
.show-arrow {
  position: fixed;
  right: 4rem;
  bottom: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  box-shadow: var(--box-shadow-1);
  background: var(--background);
  text-align: center;
  line-height: 40px;
  transition: all 0.3s ease-in-out;
  z-index: 99;
}
</style>