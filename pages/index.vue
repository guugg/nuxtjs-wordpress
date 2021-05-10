<template>
  <el-main>
    <p>Hello world!</p>

    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <el-button plain>朴素按钮</el-button>
    <el-button type="primary" plain>主要按钮</el-button>
    <el-button type="success" plain>成功按钮</el-button>
    <el-button type="info" plain>信息按钮</el-button>
    <el-button type="warning" plain>警告按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>

    <el-button round>圆角按钮</el-button>
    <el-button type="primary" round>主要按钮</el-button>
    <el-button type="success" round>成功按钮</el-button>
    <el-button type="info" round>信息按钮</el-button>
    <el-button type="warning" round>警告按钮</el-button>
    <el-button type="danger" round>危险按钮</el-button>

    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>

    <div v-for="post in posts" :key="post.id" class="psot">
      <!-- 标题 -->
      <h4>{{ post.title.rendered }}</h4>
      <!-- 摘要1 -->
      <div class="post-content" v-html="post.excerpt.rendered" />
    </div>
  </el-main>
</template>



<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'boss',
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
