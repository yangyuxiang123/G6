export default {
  namespaced: true,
  state: {
    menuActive: ''
  },
  mutations: {
    setMenuActive(state, data) {
			state.menuActive = data;
		},
  }
}