<template>
  <div>
    <VideoListItem />
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