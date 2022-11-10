<template>
  <div>
    <h1>할일 생성</h1>
    <input type="text" v-model.trim="todoTitle" />
    <button @click="createTodo(todoTitle)">+</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "CreateTodo",

  data() {
    return {
      todoTitle: '',
    };
  },
  methods: {
    ...mapActions([
      'createTodo',
    ])
    // createTodo() {
    //   this.$store.dispatch('createTodo', this.todoTitle)
    // },
  },
};
</script>

<style scoped></style>
