<template>
  <button
    class="flex items-center justify-between h-20 m-3 text-lg font-bold rounded-lg w-80"
  >
    <p class="mx-3">{{ option.type }}</p>
    <div class="flex items-center">
      <button class="w-8 mx-2 text-lg font-semibold border-2 rounded-full hover:bg-green-400 active:bg-green-500"
        @click="decrease"
       >-</button>
      <span>{{ option.count }}</span>
      <button class="w-8 mx-2 text-lg font-semibold border-2 rounded-full hover:bg-green-400 active:bg-green-500"
        @click="increase"
       >+</button>
    </div>
  </button>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      // console.log('durl');
      this.$store.commit('increase', this.option)
    },
    decrease() {
      this.$store.commit('decrease', this.option)
    },
  },
}
</script>

<style>
</style>