<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <h1>Home</h1>
    <h2>첫 번째 박스</h2>
    <div class="global border">
      <div class="box scoped-box"></div>
    </div>
    <h2>두 번째 박스</h2>
    <div class="global border">
      <div class="box scoped-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>

<style>
.box {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: solid 1px black;
  height: 100px;
  width: 100px;
}
</style>
