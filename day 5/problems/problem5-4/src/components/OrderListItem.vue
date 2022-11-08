<template>
  <div class="flex items-center justify-between h-20 m-3 text-lg font-bold bg-gray-300 rounded-lg opacity-80">
    <div class="flex item-center">
      <img :src="order.menu.image" class="w-16 h-12 mx-3 mt-3 ml-3 rounded-lg" />
      <div>
        <p class="mx-3 my-1 font-semibold">{{ order.menu.title }}</p>
        <p class="mx-3 my-1 font-semibold">사이즈 : {{ order.size.name }}</p>
      </div>
    </div>
    <div class="font-semibold">
      <p class="my-1">가격 : {{ totalPrice }}원</p>
      <span v-for="(option, index) in order.option" :key="`op-${index}`" :option="option">
        {{ option.type }} {{ option.count }}회 |
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  computed: {
    totalPrice: function () {
      const optionPrice = this.order.option.reduce((acc, ele) => {
        return acc = acc + (ele.price * ele.count)
      }, 0)
      return this.order.menu.price + this.order.size.price + optionPrice
    },
    totalOptions: function() {
      return this.$store.state.optionList
    },
    shot: function() {
      return this.totalOptions.filter((op) => {
        return op.type === '샷'
      })
    },
    vanila: function() {
      return this.totalOptions.filter((op) => {
        return op.type === '바닐라 시럽'
      })
    },
    caramel: function() {
      return this.totalOptions.filter((op) => {
        return op.type === '카라멜 시럽'
      })
    }
  },
}
</script>

<style>
</style>