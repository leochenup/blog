<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";


export default {
  name: "Comment",
  mounted() {
    const commentConfig = {
      clientID: "35a6515726aebec085c1",
      clientSecret: "910e725a7475c15cd343aef75df6731ff416de0f",
      repo: "blog",
      owner: "leochenup",
      admin: ["leochenup"],
      id: md5(location?.pathname),
    };
    const gitalk = new Gitalk(commentConfig);
    gitalk.render("gitalk-container");
  },
};
</script>