<template>
  <div id="appa">
    <app-header />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
