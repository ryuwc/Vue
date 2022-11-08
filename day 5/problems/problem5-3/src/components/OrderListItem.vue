<template>
  <div class="flex items-center justify-between h-20 m-3 text-lg font-bold bg-gray-300 rounded-lg opacity-80">
    <div class="flex">
      <img :src="order.menu.image" class="w-16 h-12 mx-3 ml-3 rounded-lg" />
      <div>
        <p class="mx-3 font-semibold">{{ order.menu.title }}</p>
        <p class="mx-3 font-semibold">사이즈 : {{ order.size.name }}</p>
      </div>
    </div>
    <p class="mr-3 font-semibold">가격 : {{ totalPrice }}원</p>
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
      return this.order.menu.price + this.order.size.price
    },
  },
}
</script>

<style>
</style>