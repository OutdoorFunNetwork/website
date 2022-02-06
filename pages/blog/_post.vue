<template>
  <main class="wrapper">
    <h1>{{ post.title }}</h1>
    <section class="byline flex">
      <div>
        <span>by: {{ post.author.display_name }}</span>
      </div>
      <img :src="post.author.avatar" class="avatar" :alt="post.author.display_name">
    </section>
    <p>{{ post.body }}</p>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'blog-post',
  data() {
    return {
      post: {
        title: Number,
        body: String,
        published_at: String,
        author: Object
      }
    }
  },
  mounted() {
    axios.get(`${process.env.baseUrl}/posts/${this.$route.params.post}`)
      .then(response => {
        this.post = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>
