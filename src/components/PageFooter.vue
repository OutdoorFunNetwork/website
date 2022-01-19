<template>
  <footer class="page-footer">
    <img alt="Outdoor Fun Network" src="../images/text-logo.svg" />
    <p>
      <strong>Outdoor Fun Network</strong> is a collective of outdoor enthusiasts who
      would like to pass our love of outdoor adventures on to others. Here you will
      find bike rides, bikepacking, backpacking, hikes, runs, snowboarding, skiing
      and generally anything else outdoors. All are welcome to become part our
      Outdoor Fun Network!
    </p>
    <nav class="footer-nav">
      <a href="https://www.strava.com/clubs/outdoor-fun-network">
        <font-awesome-icon :icon="['fab', 'strava']"/>
        <span class="accessible-text">Join us on Strava</span>
      </a>
      <a href="https://www.instagram.com/outdoorfunnetwork/">
        <font-awesome-icon :icon="['fab', 'instagram']"/>
        <span class="accessible-text">Follow us on Instagram</span>
      </a>
      <a href="https://github.com/OutdoorFunNetwork">
        <font-awesome-icon :icon="['fab', 'github']"/>
        <span class="accessible-text">Visit us on GitHub</span>
      </a>
    </nav>
    <p id="copyright">&copy; {{ currentYear }} Outdoor Fun Network. For reasons, I guess?</p>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
