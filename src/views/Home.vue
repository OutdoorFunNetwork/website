<template>
  <main>
    <section class="hero">
      <img src="../images/high-five.jpg" alt="">
    </section>
    <section class="wrapper">
      <h1>Welcome to Outdoor Fun Network!</h1>
      <p>
        Adventure cycling, backpacking, ultra running. No matter your definition
        of fun, we're here to help. We're a collective of outdoor lovers
        dedicated to encouraging others to get outside and explore.
      </p>
      <p>
        Check out our <a href="/blog">blog</a>, browse our
        <a href="/routes">routes</a>, and join the fun in our
        <a href="https://www.strava.com/clubs/outdoor-fun-network">Strava</a> group.
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    document.title = 'Welcome to Outdoor Fun Network!';
  }
}
</script>
