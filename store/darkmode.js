export const state = () => ({
  darkModeColor: '',
  isDarkMode: false
})

export const mutations = {
  SET_DARKMODECOLOR: (state, payload) => {
    state.darkModeColor = payload
  },
  SET_ISDARKMODE: (state, payload) => {
    state.isDarkMode = payload
  },
}

export const actions = {
  setDarkModeColor(vuexContext, payload){
    vuexContext.commit('SET_DARKMODECOLOR', payload)
  },
  setIsDarkMode(vuexContext, payload){
    vuexContext.commit('SET_ISDARKMODE', payload)
  }
}

export const getters = {
  getDarkModeColor(state){
    return state.darkModeColor
  },
  getIsDarkMode(state){
    return state.isDarkMode
  },
}