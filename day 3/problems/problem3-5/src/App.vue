<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model="appData" />
    <p>parentData: {{ parentData }}</p>
    <p>childData: {{ childData }}</p>
    <AppParent
      :app-data="appData"
      :parent-data="parentData"
      @parent-input="parentInput"
      @child-input="childInput"
    />
  </div>
</template>

<script>
import AppParent from "./components/AppParent.vue";

export default {
  name: "App",
  data: function () {
    return {
      appData: "",
      parentData: "",
      childData: "",
    };
  },
  methods: {
    parentInput(inputData) {
      // console.log(inputData);
      this.parentData = inputData;
    },
    childInput(child) {
      this.childData = child;
    },
  },

  components: {
    AppParent,
  },
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

  border: solid 1px black;
}
</style>
