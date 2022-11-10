import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
  },
  actions: {
    getTodos({commit}) {
      axios({
        url: "http://127.0.0.1:8000/todos/",
      })
      .then((res) => {
        console.log(res);
        commit('SET_TODOS', res.data)
      })

    },
  },
  modules: {
  }
})
