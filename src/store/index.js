import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import user from './modules/user'


Vue.use(Vuex)
const vuexLocalStorage = new VuexPersistence({
  key:'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins:[vuexLocalStorage.plugin],
  state: {
    index:0,
    user: {
      a:"a"
    }
  },
  getters: {
   
  },
  mutations: {
    
 
  },
  actions: {
 
    
  },
  modules: {
     user
  }
})
