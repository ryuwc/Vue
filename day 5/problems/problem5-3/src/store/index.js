import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: false,
        image: "https://source.unsplash.com/featured/?americano"
      },
      {
        title: '라떼',
        price: 4000,
        selected: false,
        image: "https://source.unsplash.com/featured/?latte"
      },
      {
        title: '카푸치노',
        price: 4500,
        selected: false,
        image: "https://source.unsplash.com/featured/?cappuccino"
      },
    ],
    sizeList: [
      {
        name: 'small',
        price: 0,
        selected: false,
      },
      {
        name: 'medium',
        price: 500,
        selected: false,
      },
      {
        name: 'large',
        price: 1000,
        selected: false,
      },
    ],
  },
  getters: {
  },
  mutations: {
    addOrder: function (state) {
      // let menu = state.menuList.filter((me) => {
      //   return me.selected === true
      // })
      let menu
      for (let me of state.menuList) {
        // console.log(JSON.stringify(me))
        if (me.selected === true) {
          menu = me
        }
      }
      // const size = state.sizeList.filter((si) => {
      //   return si.selected === true
      // })
      let size 
      for (let si of state.sizeList) {
        if (si.selected === true) {
          size = si
        }
      }
      const result = {menu, size}
      state.orderList.push(result)
      // console.log(state.orderList);
      
      // state.menuList.forEach((me) => {
      //   me.selected = false
      // })
      // state.sizeList.forEach((si) => {
      //   si.selected = false
      // })
    },
    updateMenuList: function (state, selectedMenu) {
      // console.log(state.menuList);
      const menu = selectedMenu.title
      state.menuList.forEach((me) => {
        if (me.title === menu) {
          me.selected = !me.selected
        }else {
          me.selected = false
        }
      })
      // console.log(state.menuList)
    },
    updateSizeList: function (state, selectedSize) {
      // console.log(state.sizeList);
      const size = selectedSize.name
      state.sizeList.forEach((si) => {
        if (si.name === size) {
          si.selected = !si.selected
        }else {
          si.selected = false
        }
      })
    },
  },
  actions: {
  },
  modules: {
  }
})