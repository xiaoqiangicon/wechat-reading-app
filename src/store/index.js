import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: 'lee',
    password: 1234,
  },
  mutations: {
    setUserName (state, value) {
      state.username = value;
    }
  },
  actions: {},
});
