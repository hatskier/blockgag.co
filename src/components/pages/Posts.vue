<template>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-3">
        <Categories />
      </div>
      <div class="mdc-layout-grid__cell--span-6">
        <div class="posts-block">
          <div v-for="(post, index) in posts" :key="index" class="post">
            <h3>{{ post.description }}</h3>
            <p>{{ post.tags }}</p>
            <img class="post-image" :src="post.imgGaiaPublicUrl">
          </div>
          <div class="post"></div>

          <div class="post"></div>
          <div class="post"></div>
          <div class="post"></div>
        </div>
      </div>
      <div class="mdc-layout-grid__cell--span-3">
        <div class="live-emotions-block"></div>
      </div>
    </div>
  </div>
</template>

<script>

import Categories from '../Categories'
import BlockstackUtils from '../../modules/blockstackUtils'

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    }
  },
  props: {
    text: Number,
    img: String,
  },
  components: {
    Categories,
  },
  created() {
    BlockstackUtils.getAllPosts().then((fetchedPosts) => {
      this.posts = fetchedPosts
    })
  },
}

</script>

<style scoped>
/* TODO */

.category-name {
  margin-bottom: 30px;
}

.live-emotions-block {
  height: 700px;
  width: 20%;
  position: fixed;
  /* top: 0;
  bottom: 0; */
  /* background-color: aquamarine; */
}

.post {
  width: 100%;
  /* height: 500px; */
  background-color: lightcyan;
  margin-bottom: 30px;
}

.post img {
  width: 100%;
  /* width: 500px; */
  /* max-height: 80vh; */
  margin: auto;
}
</style>
