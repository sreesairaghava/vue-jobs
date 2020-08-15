import Vuex from "vuex";
import Vue from "vue";
import jobs from "./modules/jobs";
//Load Vuex
Vue.use(Vuex);

//Create a Global Store
export default new Vuex.Store({
  modules: {
    jobs,
  },
});
