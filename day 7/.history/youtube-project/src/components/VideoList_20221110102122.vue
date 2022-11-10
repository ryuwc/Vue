<template>
  <div>
    <VideoListItem 
      v-for="video in videos"
      :key="video.etag"
      :video="video"
    />
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem.vue'

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  props: {
    videos: Array,
  },
  data() {
    return {
      
    };
  },
};

</script>

<style>

</style>