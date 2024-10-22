<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
// 준형이 변경222222
</script>

<style lang="scss">
@import "~/scss/main"
</style>