<template>
  <div>
    <h1>AppChild</h1>
    <input type="text" v-model="childData" @input="inputChange" />
    <p>appData: {{ appData }}</p>
    <p>parentData: {{ parentData }}</p>
    <p>childData: {{ childData }}</p>
  </div>
</template>

<script>
export default {
  name: "AppChild",
  data: function () {
    return {
      childData: "",
    };
  },
  props: {
    appData: String,
    parentData: String,
  },
  methods: {
    inputChange: function (event) {
      this.$emit("child-input", event.target.value);
    },
  },
};
</script>

<style>
div {
  border: 1px solid blue;
}
</style>
