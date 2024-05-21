<template>
  <header>
    <div class="nav nav-pills">
      <div 
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Page1',
          href: '/page1'
        },
        {
          name: 'Page2',
          href: '/page2'
        },
        {
          name: 'Page3',
          href: '/page3'
        }
      ]
    }
  }
}
</script>