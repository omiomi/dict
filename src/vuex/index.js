import Vue from 'vue'
import Vuex from 'vuex'
import { search, mutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  search,
  mutations
})
