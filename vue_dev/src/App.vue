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

// 주석추가
</script>

<style lang="scss">
@import "~/scss/main"
</style>