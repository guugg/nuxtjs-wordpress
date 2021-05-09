<template>
  <div>
    <h1 v-if="error.statusCode === 404">哦吼！页面崩溃404啦！请返回吧</h1>
    <h1 v-else>An error occurred 500</h1>
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>