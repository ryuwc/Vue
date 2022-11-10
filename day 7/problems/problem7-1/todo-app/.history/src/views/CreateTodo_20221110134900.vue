<template>
  <div>
    <h1>할일 생성</h1>
    <input type="text" v-model="todoTitle" />
    <button>+</button>
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
  methods: {},
};
</script>

<style scoped></style>
