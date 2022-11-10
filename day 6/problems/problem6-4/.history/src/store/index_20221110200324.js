import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
			// 개별 todo Object
      {
        id: 1638771553377,                // nowDateObj.getTime()
        content: 'Vue',                   // Todo 내용
        dueDateTime: '2021-12-09T00:00',  // 마감일
        isCompleted: false,               // 완료된 할 일
        isImportant: true,				        // 중요 할 일
      },
      {
        id: 1638771553378,
        content: 'Vue Router',
        dueDateTime: '2021-12-10T00:00',
        isCompleted: false,
        isImportant: true,
      },
      {
        id: 16387715533779,
        content: 'Vuex',
        dueDateTime: '2021-12-11T00:00',
        isCompleted: true,
        isImportant: false,
      },
    ],
  },
  getters: {
  },
  mutations: {
    CHANGE_COMPLETE(state, todo) {
      state.list.forEach((tod) => {
        if (tod === todo) {
          tod.isCompleted = !tod.isCompleted
        }
      })
      // console.log(state.list)
    },
    CREATE_TODO(state, newTodo) {
      state.list.unshift(newTodo)
    },
    TOGGLE_IMPORTANT(state, todo) {
      state.list.forEach((tod) => {
        if (tod === todo) {
          tod.isImportant = !tod.isImportant
        }
      })
    }
  },
  actions: {
    changeComplete(context, todo) {
      context.commit('CHANGE_COMPLETE', todo)
    },
    createTodo(context, todo) {
      const newTodo = {
        id: new Date().getTime(),
        content: todo,
        dueDateTime: new Date().toISOString().substr(0, 11)+'00:00',
        isCompleted: false,
        isImportant: false,
      }
      context.commit('CREATE_TODO', newTodo)
    },
    toggleImportant(context, todo) {
      context.commit('TOGGLE_IMPORTANT', todo)
    },
    todayTodo(context) {
      const todayList = context.state.list.filter((todo) => {
        return todo.dueDateTime.substr(0, 10) === new Date().toISOString().substr(0, 10) && !todo.isCompleted
      })
      console.log(todayList)
      return todayList
    }
  },
  modules: {
  }
})
