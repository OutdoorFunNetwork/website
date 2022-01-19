<template>
  <main class="wrapper">
    <h1>Blog</h1>
    <BlogListItem v-for="post in posts" :key="post.id" :post="post" />
  </main>
</template>

<script>
import axios from 'axios';
import BlogListItem from '@/components/BlogListItem.vue';

export default {
  components: {
    BlogListItem
  },
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    document.title = 'Blog | Outdoor Fun Network';

    await axios.get(process.env.VUE_APP_API_URL + '/api/posts/')
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>
