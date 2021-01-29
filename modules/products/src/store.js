import Vue from 'vue';
import Vuex from 'vuex';
import staticProducts from '@/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: staticProducts
  },
  mutations: {
  },
  actions: {
  },
})
