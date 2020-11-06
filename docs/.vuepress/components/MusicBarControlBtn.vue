<template>
  <div class="show-arrow hidden" @click="musicBtnClick">
    <i class="iconfont icon-musicnote"></i>
  </div>
</template>

<script>
import "./res/fonts/iconfont.css";

export default {
  data() {
    return { isShow: false };
  },

  methods: {
    musicBtnClick() {
      let showArrow = document.querySelector(".show-arrow");
      showArrow.classList.remove("show");
      showArrow.classList.add("hidden");

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
  font-size: 26px !important;
}
.show-arrow {
  position: fixed;
  right: 1rem;
  bottom: 4rem;
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