<template>
  <button
    class="flex items-center justify-between h-20 text-lg font-bold rounded-lg w-80 hover:bg-green-400"
    @click="updateSizeList"
    :class="{'bg-green-400 text-white': size.selected}"
  >
    <p class="mx-3">{{ size.name }}</p>
    <p class="mx-3">{{ size.price }}원</p>
  </button>
</template>

<script>
export default {
  name: "SizeListItem",
  props: {
    size: Object,
  },
  methods: {
    updateSizeList() {
      this.$store.commit('updateSizeList', this.size)
    }
  }
};
</script>

<style></style>
