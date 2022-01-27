<template>
  <main class="wrapper">
    <article>
      <header>
        <h1>{{ post.title }}</h1>
        <section class="byline">
          by: {{ post.author.display_name }}
          <img :src="post.author.avatar" class="avatar" alt="">
        </section>
      </header>
      <section v-html="post.body"></section>
    </article>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BlogPost',
  props: {
    id: Number
  },
  data() {
    return {
      post: {
        title: String,
        author: {
          display_name: String,
          avatar: String
        },
        body: String
      }
    }
  },
  async mounted() {
    await axios.get(process.env.VUE_APP_API_URL + '/posts/' + this.$props.id)
      .then(response => {
        console.log(response);
        this.post = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    document.title = `${this.post.title} | Outdoor Fun Network`;
  }
}
</script>
