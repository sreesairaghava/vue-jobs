import axios from "axios";

const BASE_URL = `https://jsonplaceholder.typicode.com/todos`;

//Create State
const state = {
  jobs: [],
};
//Create getters
const getters = {
  allJobs: (state) => state.jobs,
};
//Create Actions
const actions = {
  // Create actions here
  async fetchJobs({ commit }) {
    const response = axios.get(BASE_URL);
    console.log((await response).data);
    commit("setJobs", (await response).data);
  },
};
//Create Mutatins
const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
};
//Export all as default
export default {
  state,
  getters,
  actions,
  mutations,
};
