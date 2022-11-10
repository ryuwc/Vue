<template>
  <div v-if="video">
    <div>
      <iframe :src="videoUrl" frameborder="0"></iframe>
    </div>
    <div>
      {{ video?.snippet.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    video: Object,
  },
  data() {
    return {

    };
  },
  computed: {
    videoUrl() {
      const videoId = this.video?.id.videoId
      return `https://www.youtube.com/embed/${videoId}`
    }
  },
  methods: {
    
  },
};
</script>

<style scoped>

</style>