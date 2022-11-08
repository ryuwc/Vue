<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <br>
    <div class="flex justify-center gap-3">
      <MenuList/>
      <SizeList/>
    </div>
    <div id="btn">
      <button 
        class="h-12 my-3 ml-auto mr-auto text-lg font-bold rounded-lg hover:bg-green-400 active:bg-green-500 "
        @click="addOrder"
      >
      장바구니 담기
      </button>
    </div>
    <div>
      <OrderList id="orderlist"/>
    </div>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';
import SizeList from './components/SizeList.vue';
import OrderList from './components/OrderList.vue';


export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OrderList,
  },
  methods: {
    addOrder() {
      return this.$store.commit('addOrder')
    }
  }
  
}
</script>

<style>
#btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

#orderlist {
  width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

button {
  width: 42rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}
</style>
