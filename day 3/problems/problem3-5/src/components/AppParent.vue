<template>
  <div class="red">
    <h1>AppParent</h1>
    <input type="text" @input="inputChange" />
    <p>appData: {{ appData }}</p>
    <p>childData: {{ childData }}</p>
    <AppChild
      :app-data="appData"
      :parent-data="parentData"
      @child-input="childInput"
    />
  </div>
</template>

<script>
import AppChild from "./AppChild.vue";

export default {
  name: "AppParent",
  data: function () {
    return {
      childData: "",
    };
  },
  components: {
    AppChild,
  },
  props: {
    appData: String,
    parentData: String,
  },
  methods: {
    inputChange(event) {
      // console.log(event.target.value);
      this.$emit("parent-input", event.target.value);
    },
    childInput(child) {
      this.$emit("child-input", child);
      this.childData = child;
    },
  },
};
</script>

<style>
.red {
  border: 1px solid crimson;
}
</style>
