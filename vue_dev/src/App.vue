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
// 지원이가 변경4
</script>

<style lang="scss">
@import "~/scss/main"
</style>