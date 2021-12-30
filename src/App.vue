<template>
  <div id="app">
    <PageHeader/>
    <router-view :key="$router.fullPath"/>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="scss">
  @import 'styles/main.scss';
</style>
