<template>
  <div>
    <h3>나는 MyComponent의 하위 컴포넌트다</h3>
    <p>{{ staticProps }}</p>
    <p>{{ dynamicProps }}</p>
    <button @click="childToParent">클릭</button>
    <input type="text" v-model="childInputData" @keyup.enter="childInput" />
  </div>
</template>

<script>
export default {
  name: "MyComponentItem",
  props: {
    staticProps: String,
    dynamicProps: String,
  },
  data: function () {
    return {
      childInputData: null,
    };
  },
  methods: {
    childToParent: function () {
      this.$emit("help-me", "나는 자식이 보낸 데이터");
    },
    childInput: function () {
      this.$emit("child-input", this.childInputData);
      this.childInputData = "";
    },
  },
};
</script>

<style></style>
