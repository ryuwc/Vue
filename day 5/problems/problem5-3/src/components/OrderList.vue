<template>
  <div class="my-3 bg-gray-200 rounded-lg ">
    <h1 class="p-3 pt-10">주문 내역</h1>
    <h3 class="p-3">총 {{ totalOrderCount }}건: {{ totalOrderPrice }}원</h3>
    <OrderListItem
      v-for="(order, index) in orderList"
      :key="`order-${index}`"
      :order="order"
    />
    <hr class="w-2/3 h-1 mx-auto mt-8 bg-gray-400 border-0 rounded ">
    <br>
  </div>
</template>

<script>
import OrderListItem from './OrderListItem.vue';

export default {
  name: 'OrderList',
  components: {
    OrderListItem
  },
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    totalOrderCount: function () {
      return this.orderList.length
    },
    totalOrderPrice: function () {
      return this.orderList.reduce((acc, ele) => {
        // console.log('acc:', acc)
        // console.log('ele:', ele)
        return acc = acc + ele.menu.price + ele.size.price
      }, 0)
    },
  },
}
</script>

<style>
</style>