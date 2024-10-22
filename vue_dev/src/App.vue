<template>
  <h1> {{ message }}</h1>
  <HelloWorld />
  <h2>
    Test
  </h2>
</template>

<script>
import HelloWorld from '~/components/HelloWorld'

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'Hello Vue!!!'
    }
  }
}

// 주석추가
</script>

<style>
  h2 {
    color: orange;
    font-size: 40px;
    display: flex;
  }
</style>