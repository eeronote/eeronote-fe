import testApi from '@/api/test'

const state = {
  messages: {
    message: ''
  }
}

const getters = {
  allMessages: state => state.messages
}

const mutations = {
  setMessages (state, body) {
    state.messages.message = body.message
  }
}

const actions = {
  fetchMessage ({commit}) {
    testApi.getMessage(response => {
      response.body != null
        ? commit('setMessages', response.body)
        : console.error(response.body)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
