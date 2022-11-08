<template>
  <div>
    <h1 class="m-3">2. 사이즈를 고르세요.</h1>
    <SizeListItem
      v-for="(size, index) in sizeList"
      :key="`size-${index}`"
      :size="size"
      class="m-3"
    />
  </div>
</template>

<script>
import SizeListItem from './SizeListItem.vue';

export default {
  name: 'SizeList',
  components: {
    SizeListItem
  },
  methods: {
    onSelectMenu: function () {},
  },
  computed: {
    sizeList: function () {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
</style>