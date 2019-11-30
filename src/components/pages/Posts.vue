<template>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-3">
        <Tags />
      </div>
      <div class="mdc-layout-grid__cell--span-6">
        <div class="posts-block">
          <div v-for="(post, index) in filteredPosts" :key="index" class="post">
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

import Tags from '../Tags'
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
    Tags,
    Post,
    LiveEmotions,
  },
  created() {
    BlockstackUtils.getAllPosts().then((fetchedPosts) => {
      this.posts = fetchedPosts
    })
  },
  computed: {
    filteredPosts: function() {
      if (this.posts && this.posts.length) {
        let result = JSON.parse(JSON.stringify(this.posts))
        result.sort((p1, p2) => p2.createdAt - p1.createdAt)

        let selectedTag = this.State.selectedTag
        if (selectedTag && !['Hot', 'Trending', 'Fresh'].includes(selectedTag)) {
          return result.filter(p => (p.tags && p.tags.includes(selectedTag)))
        }
        return result
      }
      return []
    }
  }
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
