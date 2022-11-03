<template>
  <div>
    <h1>Video Detail</h1>
    <div v-if="selectedVideo" class="ratio ratio-16x9">
      <iframe :src="videoUrl" frameborder="0" width="640" height="360"></iframe>
    </div>
    <div v-else>
      <p>선택한 비디오가 없습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetailVue",
  props: {
    selectedVideo: Object,
  },
  computed: {
    videoUrl: function () {
      return `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`;
    },
  },
};
</script>

<style></style>
