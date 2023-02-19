import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoppingList: [],
  },
  mutations: {
    setList(state, shoppingList) {
      state.shoppingList = shoppingList;
    },
  },
  actions: {
  },
  modules: {
  }
})
