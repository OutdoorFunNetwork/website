<template>
  <article>
    <header>
      <h2><router-link :to="{ name: 'BlogPost', params: { postYear: formattedYear , postMonth: formattedMonth, postDay: formattedDay, slug: post.slug, id: post.id } }">{{ post.title }}</router-link></h2>
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
    formattedYear() {
      const dateString = this.$props.post.published_at.split('-');
      const year = dateString[0];

      return year;
    },
    formattedMonth() {
      const dateString = this.$props.post.published_at.split('-');
      const month = dateString[1];

      return month;
    },
    formattedDay() {
      const dateString = this.$props.post.published_at.split('-');
      const day = dateString[2].substr(0, 2)

      return day;
    }
  }
}
</script>
