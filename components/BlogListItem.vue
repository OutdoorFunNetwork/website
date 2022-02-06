<template>
  <article>
    <header class="blog-header">
      <h2>
        <nuxt-link :to="postSlug">
          {{ post.title }}
        </nuxt-link>
      </h2>
      <section class="byline flex">
        <div>
          <span>by: {{ post.author.display_name }}</span>
          <span>{{ formattedDate }}</span>
        </div>
        <img :src="post.author.avatar" class="avatar" alt="">
      </section>
    </header>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      id: Number,
      slug: String,
      title: String,
      published_at: String,
      author: Object,
      categories: Object
    }
  },
  computed: {
    formattedDate() {
      const dateString = this.$props.post.published_at.split('-');
      const month = dateString[1];
      const day = dateString[2].substr(0, 2)
      const year = dateString[0];

      return `${month}/${day}/${year}`;
    },
    postSlug() {
      return `blog/${this.$props.post.id}/`;
    }
  }
}
</script>
