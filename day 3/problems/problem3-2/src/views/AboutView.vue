<template>
  <div class="about">
    <h1>로또</h1>
    <button @click="getLunch">Get Lucky Numbers</button>
    <br />
    <br />
    <div>{{ nums }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from "lodash";

export default {
  name: "AboutView",
  components: {},
  data: function () {
    return {
      nums: "",
    };
  },
  methods: {
    getLunch: function () {
      this.nums = _.sampleSize(_.range(1, 46), 6);
      console.log(this.nums);
    },
  },
};
</script>
