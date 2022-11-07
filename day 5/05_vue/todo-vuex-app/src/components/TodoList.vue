<template>
  <div>
    <TodoListItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  data() {
    return {
      
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>