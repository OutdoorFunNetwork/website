<template>
  <main class="wrapper">
    <h1>Blog</h1>
    <BlogListItem v-for="post in posts" :key="post.id" :post="post" />
  </main>
</template>

<script>
import BlogListItem from '@/components/BlogListItem.vue';
// import BlogService from '@/services/BlogService';
import createClient from '~/plugins/contentful';

const client = createClient();

export default {
  head: {
    title: 'Blog'
  },
  components: {
    BlogListItem
  },
  async asyncData({ error }) {
    try {
      // const { data } = await BlogService.getPosts();
      const { items } = await client.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt'
      });

      return {
        posts: items
      }
    } catch(e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch posts at this time. Please try again.'
      });
    }
  }
}
</script>
