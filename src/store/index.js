import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index:0,
    user: {
      a:"a"
    }
  },
  getters: {
    TAKE_INDEX: (state) => state.index,
  },
  mutations: {
    SET_INDEX: function(state, payload){
      state.index = payload
    },
 
  },
  actions: {
    modifyIndex: function({commit, state},payload){
    
      const modifiedState = state.index +1;
      console.log("modifiedState", modifiedState, state)
      commit("SET_INDEX", payload ? payload:  modifiedState )
    }
  },
  modules: {
     user
  }
})
