<template>
  <div class="home">
    <h1>점심메뉴</h1>
    <button @click="getLunch">Pick Lunch</button>
    <br />
    <br />
    <div>{{ menu }}</div>
    <hr />
    <h2>로또를 뽑아보자</h2>
    <router-link to="/about">
      <button>Pick Lotto</button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from "lodash";

export default {
  name: "HomeView",
  components: {},
  data: function () {
    return {
      menu: "",
    };
  },
  methods: {
    getLunch: function () {
      this.menu = _.sample(["국밥", "삼겹살", "회", "소주"]);
    },
  },
};
</script>
