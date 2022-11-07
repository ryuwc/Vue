<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <br>
    <div class="flex justify-center gap-3">
      <MenuList/>
      <SizeList/>
    </div>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';
import SizeList from './components/SizeList.vue';

export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
  }
}
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

* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}
</style>
