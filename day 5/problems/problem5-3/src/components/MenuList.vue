<template>
  <div class="menu-list">
    <h1 class="m-3">1. 음료를 고르세요.</h1>
    <MenuListItem
      v-for="(menu, index) in menuList"
      :key="`menu-${index}`"
      :menu="menu"
      class="m-3"
    />
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem'

export default {

  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList() {
      return this.$store.state.menuList
    },
  },
  methods: {
    selectMenu: function () {},
  },
}
</script>

<style>

</style>