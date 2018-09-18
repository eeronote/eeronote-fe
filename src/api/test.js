import Vue from 'vue'

export default {
  getMessage (success) {
    Vue.http.get('/test').then(success)
  }
}
