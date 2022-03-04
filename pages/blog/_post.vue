<template>
  <main class="wrapper">
    <h1>{{ post.title }}</h1>
    <section class="byline flex">
      <div>
        <span>by: {{ post.author.display_name }}</span>
        <span>{{ formattedDate }}</span>
      </div>
      <img :src="post.author.avatar" class="avatar" :alt="post.author.display_name">
    </section>
    <article v-html="$md.render(post.body)" />
  </main>
</template>

<script>
import BlogService from '@/services/BlogService';

export default {
  name: 'blog-post',
  head() {
    return {
      title: this.post.title
    }
  },
  async asyncData({ error, params }) {
    try {
      const { data } = await BlogService.getPost(params.post);
      return {
        post: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch post at this time. Please try again.'
      });
    }
  },
  computed: {
    formattedDate() {
      const dateString = this.post.published_at.split('-');
      const month = dateString[1];
      const day = dateString[2].substr(0, 2)
      const year = dateString[0];

      return `${month}/${day}/${year}`;
    }
  }
}
</script>
