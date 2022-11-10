<template>
  <div id="app">
    <h1>Youtube Project</h1>
    <TheSearchBar 
      @input-change="inputChange"
    />
  </div>
</template>

<script>
import TheSearchBar from "./components/TheSearchBar.vue";
import axios from 'axios'

// 서버 재시작해서
const API_KEY = process.env.VUE_APP_MY_KEY

// console.log(API_KEY);

export default {
  name: "App",
  components: {
    TheSearchBar,
  },
  methods: {
    // inputChange(query) {
    //   // console.log('App', query)
      
    // }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
