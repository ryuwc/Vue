<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="box d-flex flex-column justify-content-around">
    <h4 class="">시작</h4>
    <div class="d-flex align-items-center justify-content-around">
      <button @click="cantMove"><i class="fa-solid fa-arrow-left"></i></button>
      <img src="../assets/happeed.png" style="height: 250px" />
      <router-link to="/Two"
        ><button><i class="fa-solid fa-arrow-right"></i></button
      ></router-link>
    </div>
    <h4>해피드</h4>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "one",
  methods: {
    cantMove: function () {
      alert("이전 진화 단계로 돌아갈 수 없습니다.");
      return;
    },
  },
};
</script>

<style>
.box {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: solid 1px white;
  height: 400px;
  width: 400px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
  color: #424242;
}
</style>
