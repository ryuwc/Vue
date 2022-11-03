<template>
  <div>
    <input
      class="form-text"
      type="text"
      v-model.trim="query"
      @keyup.enter="onInputChange"
    />
    <button class="btn btn-primary">검색</button>
  </div>
</template>

<script>
export default {
  name: "SearchBarVue",
  data: function () {
    return {
      query: "",
    };
  },
  methods: {
    onInputChange: function () {
      if (!this.query) {
        alert("입력해라..");
        return;
      }
      // console.log(this.query);
      this.$emit("input-change", this.query);
    },
  },
};
</script>

<style></style>
