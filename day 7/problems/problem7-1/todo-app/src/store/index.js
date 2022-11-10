import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    },
    CREATE_TODO(state, todo) {
      state.todos.push(todo)
      // console.log(state.todos);

      // router.push('/')
      router.push({name: 'index'})
    },
  },
  actions: {
    createTodo(context, todoTitle) {
      axios({
        method: 'post',
        url: "http://127.0.0.1:8000/todos/",
        data: {
          title: todoTitle,
          is_completed: false,
        },
      })
      .then((res) => {
        // console.log(res)
        context.commit('CREATE_TODO', res.data)
      })
    },
    getTodos({commit}) {
      axios({
        url: "http://127.0.0.1:8000/todos/",
      })
      .then((res) => {
        // console.log(res);
        commit('SET_TODOS', res.data)
      })

    },
  },
  modules: {
  }
})
