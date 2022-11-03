<template>
  <ul class="list-group">
    <VideoListItemVue
      v-for="video in videos"
      :key="video.etag"
      :video="video"
      @select-video="selectVideo"
    />
  </ul>
</template>

<script>
import VideoListItemVue from "./VideoListItemVue.vue";

export default {
  name: "VideoListVue",
  components: {
    VideoListItemVue,
  },
  methods: {
    selectVideo: function (video) {
      this.$emit("select-video", video);
    },
  },
  props: {
    videos: Array,
  },
};
</script>

<style></style>
