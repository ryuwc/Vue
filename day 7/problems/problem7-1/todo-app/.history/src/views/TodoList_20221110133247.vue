<template>
  <div>
    <h1>할일 목록</h1>
    <button @click="getTodos">Get Todos</button>
  </div>
</template>

<script>
export default {
  name: "TodoList",

  data() {
    return {};
  },
  methods: {
    getTodos() {
      this.$store.dispatch('getTodos')
    }
  },
};
</script>

<style scoped></style>
