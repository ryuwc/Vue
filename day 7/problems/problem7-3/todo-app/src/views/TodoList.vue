<template>
  <div>
    <h1>할일 목록</h1>
    <hr>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
        <button @click="deleteTodo(todo.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "TodoList",

  data() {
    return {};
  },
  computed: {
    // todos() {
    //   return this.$store.state.todos
    // }
      ...mapState([
        'todos',
      ])
  },
  methods: {
    // getTodos() {
    //   this.$store.dispatch('getTodos')
    // },
    ...mapActions([
      'getTodos',
      'deleteTodo',
    ])
  },
  created() {
    this.getTodos()
  },
};
</script>

<style scoped></style>
