<template>
  <li>
    <img :src="thumbnailUrl" alt="">
    {{ videoTitle | stringUnescape }}
  </li>
</template>

<script>
import _ from 'lodash'

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
    },
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url
    },
  },
  filters: {
    stringUnescape(rawText) {
      return _.unescape(rawText) 
    }
  },
  methods: {
    
  },
};
</script>