import Vue from 'vue'
import Vuex from 'vuex'

import menu from './module/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu
  }
})

