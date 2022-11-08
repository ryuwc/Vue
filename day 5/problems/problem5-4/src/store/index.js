import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    optionPrice: [],
    optionList: [
      {
        type: '샷',
        price: 500,
        count: 0,
      },
      {
        type: '바닐라 시럽',
        price: 500,
        count: 0,
      },
      {
        type: '카라멜 시럽',
        price: 500,
        count: 0,
      },
    ],
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
      if (menu && size) {
        const option = JSON.parse(JSON.stringify(state.optionList))
        const result = {menu, size, option}
        console.log(result)
        state.orderList.push(result)
      }

      state.optionList.forEach((op) => {
        if (op.count > 0) {
          state.optionPrice.push(op.count * op.price)
        }
      })

      state.optionList.forEach((ele) => {
        ele.count = 0
      })
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
    increase: function(state, selectedOption) {
      // console.log('@!@!')
      const option = selectedOption.type
      state.optionList.forEach((op) => {
        if (op.type === option) {
          op.count ++
        }
      })
    },
    decrease: function(state, selectedOption) {
      state.optionList.forEach((op) => {
        if (op === selectedOption && op.count > 0) {
          op.count --
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})