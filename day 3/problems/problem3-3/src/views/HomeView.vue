<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <h2>Start 버튼으로 시작해 보세요!</h2>
    <img src="../assets/ssafy-banner.png" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>

<style>
.btn {
  margin-left: 3rem;
  margin-right: 3rem;
  border: 1px solid #f1a324;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
  color: #424242;
  width: 100px;
  height: 60px;
  background-color: white;
}

.btn:hover {
  background-color: #f7e43a;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.box {
  margin-left: 10rem;
  margin-right: 10rem;
  text-align: center;
  border: solid 1px black;
  height: 100px;
  width: 100px;
}
</style>
