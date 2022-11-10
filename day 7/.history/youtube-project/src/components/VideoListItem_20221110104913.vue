<template>
  <li @click="selectVideo">
    <img :src="thumbnailUrl" alt="">
    <span>{{ videoTitle | stringUnescape }}</span>
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
    selectVideo() {
      this.$emit('select-video', this.video)
    }
  },
};
</script>