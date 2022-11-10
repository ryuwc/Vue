<template>
  <li>
    {{ videoTitle }}
  </li>
</template>

<script>
// import _ from 'lodash'

export default {
  name: 'VideoListItem',
  props: {
    video: Object
  },
  data() {
    return {
      
    };
  },
  computed: {
    videoTitle() {
      return this.video.snippet.title
    }
  },
  methods: {
    
  },
};
</script>