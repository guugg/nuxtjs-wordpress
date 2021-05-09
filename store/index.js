

export const mutations = {
  SET_CLOOPRO: (state, posts) => {
    state.posts = posts
  }
}

export const actions = {
  async getposts ({ state, commit }) {
    // if CLOOPRO is already set, stop
    if (state.posts) { return }
    try {
      let posts = await this.$axios.$get('/wp-json/wp/v2/posts?page=1&per_page=100&_embed=1')
      // filter out unnecessary data
      posts = posts.map(({ id, slug, title, content, excerpt }) => ({
        id,
        slug,
        title,
        content,
        excerpt
      }))
      commit('SET_CLOOPRO', posts)
    } catch (err) {
      console.error('getposts', err)
    }
  }
}
