<template>
  <div>
    <h1>할일 목록</h1>
    <button @click="getTodos">Get Todos</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodoList',

  data() {
    return {
      
    };
  },
  methods: {
    getTodos() {
      axios({
        url: 'http://127.0.0.1:8000/todos/'
      })
      .then(res => {
        console.log(res);
      })
    }
  },
};
</script>

<style scoped>

</style>