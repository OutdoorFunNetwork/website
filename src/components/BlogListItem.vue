<template>
  <article>
    <header>
      <h2><router-link :to="fullUrlSlug">{{ post.title }}</router-link></h2>
      <section class="byline">
        by: {{ post.author.display_name }}
        {{ formattedDate }}
        <img :src="post.author.avatar" class="avatar" alt="">
      </section>
    </header>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      slug: String,
      title: String,
      published_at: String,
      author: Object,
      categories: Object
    }
  },
  computed: {
    fullUrlSlug() {
      const dateString = this.$props.post.published_at.split('-');
      const month = dateString[1];
      const day = dateString[2].substr(0, 2)
      const year = dateString[0];

      return `/blog/${year}/${month}/${day}/${this.$props.post.slug}`
    },
    formattedDate() {
      const dateString = this.$props.post.published_at.split('-');
      const month = dateString[1];
      const day = dateString[2].substr(0, 2)
      const year = dateString[0];

      return `${month}/${day}/${year}`;
    }
  }
}
</script>
