<template>
  <div>
    <input type="text" v-model="todoTitle" @keyup.enter="createTodo" />
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  components: {},
  data: function () {
    return {
      todoTitle: "",
    };
  },
  methods: {
    createTodo: function () {
      this.$emit("create-todo", this.todoTitle);
      this.todoTitle = "";
    },
  },
};
</script>

<style></style>
