<template>
  <li>
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
    }
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