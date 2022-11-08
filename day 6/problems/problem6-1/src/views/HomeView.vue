<template>
    <div class="grid grid-cols-3 gap-1">
      <nav class="flex flex-col col-span-1 mx-1 my-4 border-2 border-black border-solid rounded-lg h-72">
        <router-link to="/">모든</router-link>
        <router-link to="/about">오늘</router-link>
        <router-link to="/">중요</router-link>
      </nav>
      <div class="col-span-2 my-4 border-2 border-black border-solid rounded-lg h-72">

      </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;

}
</style>