<template>
  <div id="app">
    <div class="flex wrap">
      <div class="box">
        <div class="flex flex-col">
          <br />
          <h2><strong>예약 페이지</strong></h2>
          <br />
          <h4><strong>선생님 선택</strong></h4>
          <br />
          <div class="flex justify-between mx-40">
            <button class="bg-gray-200 btn">Eric</button>
            <button class="btn">Tony</button>
          </div>
          <hr />
          <br />
          <h4><strong>시간 선택</strong></h4>
        </div>
      </div>
      <div class="box bg-slate-300"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.btn {
  margin-left: 8px;
  margin-right: 8px;
  border: 1px solid black;
  color: #424242;
  width: 100px;
  height: 40px;
}

.wrap {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
}

.box {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: solid 1px white;
  height: 400px;
  width: 550px;
  color: #424242;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
