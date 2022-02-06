<template>
  <main>
    <section class="hero">
      <img src="~/static/images/flat-tire.jpg" alt="">
    </section>
    <section class="wrapper">
      <h1>Yikes!</h1>
      <p v-if="statusCode === 404">
        We forgot to finish this page before we headed out for an adventure. That's on us.
        Maybe try going <nuxt-link to="/">back home</nuxt-link>?
      </p>
      <p v-else>
        {{ message }}
      </p>
    </section>
  </main>
</template>
<script>
  export default {
    name: 'NuxtError',
    props: {
      error: {  // <--- Send in the error
        type: Object,
        default: null
      }
    },
    head() {
      return {
        title: this.message // <--- Set the SEO title
      }
    },
    computed: {
      statusCode() {  // <--- Get the status code
        return (this.error && this.error.statusCode) || 500
      },
      message() {  // <--- Print the error
        return this.error.message
      }
    }
  }
</script>
