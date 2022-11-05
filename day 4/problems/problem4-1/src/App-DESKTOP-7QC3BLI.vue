<template>
  <div id="app">
    <div class="box">
      <h2>예약 페이지</h2>
      <br />
      <h4>시간 선택</h4>
      <br />

      <div @click="addTime(), selectBtn()">
        <div class="d-flex justify-content-around">
          <button class="hover">00:00</button>
          <button>00:30</button>
          <button>01:00</button>
          <button>01:30</button>
          <button>02:00</button>
          <button>02:30</button>
          <button>03:00</button>
          <button>03:30</button>
        </div>
        <div class="d-flex justify-content-around">
          <button>04:00</button>
          <button>04:30</button>
          <button>05:00</button>
          <button>05:30</button>
          <button>06:00</button>
          <button>06:30</button>
          <button>07:00</button>
          <button>07:30</button>
        </div>
        <div class="d-flex justify-content-around">
          <button>08:00</button>
          <button>08:30</button>
          <button>09:00</button>
          <button>09:30</button>
          <button>10:00</button>
          <button>10:30</button>
          <button>11:00</button>
          <button>11:30</button>
        </div>
        <div class="d-flex justify-content-around">
          <button>12:00</button>
          <button>12:30</button>
          <button>13:00</button>
          <button>13:30</button>
          <button>14:00</button>
          <button>14:30</button>
          <button>15:00</button>
          <button>15:30</button>
        </div>
        <div class="d-flex justify-content-around">
          <button>16:00</button>
          <button>16:30</button>
          <button>17:00</button>
          <button>17:30</button>
          <button>18:00</button>
          <button>18:30</button>
          <button>19:00</button>
          <button>19:30</button>
        </div>
        <div class="d-flex justify-content-around">
          <button>20:00</button>
          <button>20:30</button>
          <button>21:00</button>
          <button>21:30</button>
          <button>22:00</button>
          <button>22:30</button>
          <button>23:00</button>
          <button>23:30</button>
        </div>
      </div>
      <hr />
      <br />
      <div class="d-flex justify-content-around">
        <h5>선택시간 :</h5>
        <h5 v-for="(time, index) in selectedTimes" :key="index">{{ time }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  // computed: {
  //   putTimes: function() {
  //     return this.selectedTimes
  //   }
  // }
  components: {},
  data: function () {
    return {
      selectedTimes: [],
    };
  },
  methods: {
    addTime: function () {
      let idx;
      let flag = false;
      const nowTime = event.target.innerText;

      this.selectedTimes.forEach((time) => {
        if (time === nowTime) {
          idx = this.selectedTimes.indexOf(nowTime);
          flag = true;

          this.selectedTimes.splice(idx, 1);
        }
      });

      if (this.selectedTimes.length > 4) {
        alert("5개만 선택해라..");
        return;
      }
      if (flag) {
        return;
      }
      // console.log(event.target.innerText);
      this.selectedTimes.push(event.target.innerText);
      this.selectedTimes.sort();
    },
    selectBtn: function () {
      event.target.classList.toggle("Qselected");
    },
  },
};
</script>

<style>
* {
  font-family: "Noto Sans KR", sans-serif;
}

button {
  background-color: white;
  border: white;
  color: gray;
}

button:hover {
  background-color: rgb(178, 239, 239);
}

.Qselected {
  background-color: #b9e2f5;
}

.box {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: solid 1px white;
  height: 400px;
  width: 550px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
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
