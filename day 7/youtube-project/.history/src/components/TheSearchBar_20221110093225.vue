<template>
  <div>
    <input type="text" v-model="query" @keyup.enter="inputChange" />
  </div>
</template>

<script>
export default {
  name: "TheSearchBar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    inputChange(event) {
      // console.log(event.target.value, this.query);
      this.$emit('input-change', event.target.value)
    },
  },
};
</script>

<style></style>
