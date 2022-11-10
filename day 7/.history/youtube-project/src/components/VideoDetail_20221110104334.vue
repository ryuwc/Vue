<template>
  <div>
    {{ video?.snippet.title }}
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
  methods: {
    
  },
};
</script>

<style scoped>

</style>