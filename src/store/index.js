import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: {}
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setPost(state, post) {
      state.post = post
    }
  },

})
