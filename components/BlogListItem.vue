<template>
  <article>
    <header class="blog-header">
      <h2>
        <nuxt-link :to="postSlug">
          {{ post.fields.title }}
        </nuxt-link>
      </h2>
      <section class="byline flex">
        <div>
          <span>by: {{ post.fields.author.fields.name }}</span>
          <span>{{ formattedDate }}</span>
        </div>
        <img :src="post.fields.author.fields.image.fields.file.url" class="avatar" alt="">
      </section>
    </header>
  </article>
</template>

<script>
import dateFormat from '~/plugins/date-format';

export default {
  props: {
    post: {
      fields: {
        title: String,
        slug: String,
        body: String,
        publishDate: String,
        author: {
          fields: {
            name: String,
            shortBio: String,
            imag: Object,
          }
        }
      }
    }
  },
  computed: {
    postSlug() {
      return `blog/${this.$props.post.fields.slug}/`;
    },
    formattedDate() {
      return dateFormat(this.$props.post.fields.publishDate);
    }
  }
}
</script>
