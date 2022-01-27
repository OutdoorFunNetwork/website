<template>
  <main class="wrapper">
    <h1>Oops!</h1>
    <p>We forgot to finish this page before we went out on an adventure. That one's on us. Sorry!</p>
    <router-link :to="{ name: 'Home' }">Head home</router-link>
  </main>
</template>

<script>
export default {
  mounted() {
    document.title = 'Not Found | Outdoor Fun Network';
  }
}
</script>
