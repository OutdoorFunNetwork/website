<template>
  <main class="wrapper">
    <h1>{{ post.fields.title }}</h1>
    <section class="byline flex">
      <div>
        <span>by: {{ post.fields.author.fields.name }}</span>
        <span>{{ formattedDate }}</span>
      </div>
      <img :src="post.fields.author.fields.image.fields.file.url" class="avatar" :alt="post.fields.author.fields.name">
    </section>
    <article v-html="$md.render(post.fields.body)" />
  </main>
</template>

<script>
import createClient from '~/plugins/contentful';
import dateFormat from '~/plugins/date-format';

const client = createClient();

export default {
  name: 'blog-post',
  head() {
    return {
      title: this.post.fields.title
    }
  },
  async asyncData({ error, params }) {
    try {
      // const { data } = await BlogService.getPost(params.post);
      const { items } = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug,
      });

      return {
        post: items[0]
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
      return dateFormat(this.post.fields.publishDate);
    }
  }
}
</script>
