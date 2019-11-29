<template>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-3">
        <Categories />
      </div>
      <div class="mdc-layout-grid__cell--span-6">
        <div class="posts-block">
          <div v-for="(post, index) in posts" :key="index" class="post">
            <Post :post="post" />
          </div>
          <div class="post"></div>

          <div class="post"></div>
          <div class="post"></div>
          <div class="post"></div>
        </div>
      </div>
      <div class="mdc-layout-grid__cell--span-3">
        <div class="live-emotions-block">
          <LiveEmotions :enabled="State.liveEmotionsEnabled" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Categories from '../Categories'
import BlockstackUtils from '../../modules/blockstackUtils'
import Post from '../Post'
import LiveEmotions from '../LiveEmotions'
import State from '../../modules/state'

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
      State,
    }
  },
  props: {
    text: Number,
    img: String,
  },
  components: {
    Categories,
    Post,
    LiveEmotions,
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
}

</style>
