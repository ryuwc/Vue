<template>
  <div>
    <H1>hello, {{ userName }}</H1>
  </div>
</template>

<script>
export default {
  name: 'HelloView',

  data() {
    return {
      userName: this.$route.params.userName
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.userName = to.params.userName
    next()
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>