import Vue from 'vue';
import Vuex from 'vuex';
import staticUsers from '@/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: staticUsers
  },
  mutations: {
  },
  actions: { 
  },
  getters: {
    getUserById: (state) => (id) => {
        return state.users.find(item => item.id === id);
    }
  }
})
