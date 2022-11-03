<template>
  <li class="list-group-item" @click="selectVideo">
    <div class="d-flex">
      <img :src="thumbnailUrl" />
      <div>
        {{ videoTitle }}
      </div>
    </div>
  </li>
</template>

<script>
import _ from "lodash";

export default {
  name: "VideoListItemVue",
  props: {
    video: Object,
  },
  methods: {
    selectVideo: function () {
      // console.log("click");
      this.$emit("select-video", this.video);
    },
  },
  computed: {
    videoTitle: function () {
      return _.unescape(this.video.snippet.title);
    },
    thumbnailUrl: function () {
      return this.video.snippet.thumbnails.default.url;
    },
  },
};
</script>

<style></style>
