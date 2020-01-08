import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:""
  },
  getters:{
    getName:(state) => {
      return state.name
    }
  },

  mutations: {
    setName:(state,val) => {
      //console.log("mutations ", val);
      state.name = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
