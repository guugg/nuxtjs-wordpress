<template>
  <div>
    <Logo />
    <p>Hello world!</p>

    <div v-for="post in posts" :key="post.id" class="psot">
      <!-- 标题 -->
      <h4>{{ post.title.rendered }}</h4>
      <!-- 摘要1 -->
      <div class="post-content" v-html="post.excerpt.rendered" />
    </div>
  </div>
</template>



<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'blog',
  computed: {
    ...mapState(['posts'])
  },

  created () {
    this.getposts()
  },

  methods: {
    ...mapActions(['getposts'])
  },
  data () {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  p {
    color: $secondary;
  }
}
</style>
