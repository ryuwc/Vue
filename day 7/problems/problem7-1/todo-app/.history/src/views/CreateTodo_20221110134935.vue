<template>
  <div>
    <h1>할일 생성</h1>
    <input type="text" v-model.trim="todoTitle" />
    <button @click="createTodo">+</button>
  </div>
</template>

<script>
export default {
  name: "CreateTodo",

  data() {
    return {
      todoTitle: '',
    };
  },
  methods: {
    createTodo() {
      
    },
  },
};
</script>

<style scoped></style>
