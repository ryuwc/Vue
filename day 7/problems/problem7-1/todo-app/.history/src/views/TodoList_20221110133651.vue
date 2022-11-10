<template>
  <div>
    <h1>할일 목록</h1>
    <button @click="getTodos">Get Todos</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: "TodoList",

  data() {
    return {};
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  methods: {
    getTodos() {
      this.$store.dispatch('getTodos')
    },
  },
};
</script>

<style scoped></style>
