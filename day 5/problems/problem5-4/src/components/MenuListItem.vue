<template>
  <button
    class="flex items-center justify-between h-20 text-lg font-bold rounded-lg w-80 hover:bg-green-400"
    @click="updateMenuList"
    :class="{'bg-green-400 text-white': menu.selected}"
  >
    <img :src="menu.image" class="w-16 h-12 mx-3 ml-3 rounded-lg" />
    <p class="mx-3">{{ menu.title }}</p>
    <p class="mx-3">{{ menu.price }}원</p>
  </button>
</template>

<script>
export default {
  name: "MenuListItem",
  props: {
    menu: Object,
  },
  methods: {
    updateMenuList() {
      this.$store.commit("updateMenuList", this.menu);
    },
  },
};
</script>

<style></style>
