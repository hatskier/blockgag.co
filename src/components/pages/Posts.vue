<template>
  <div class="posts mdc-layout-grid">

    <!-- <div id="help-us-make-it-better-container"> -->
    <a class="help-link slide-down-element-delay-1s-scale-down init-hidden" target="_blank" href="https://alex220493.typeform.com/to/opLBAw">
      <!-- <img class="thanks-emoji" src="../../../public/thanks-emoji.png" /> -->
      HELP US
      <i class="material-icons">star_border</i>
      <br />
      <span>by sharing your feedback</span>
    </a>
    <!-- </div> -->

    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-3">
        <Tags />
      </div>
      <div class="mdc-layout-grid__cell--span-6">
        <div class="posts-block">
          <!-- <h2>HEHE {{ $route.params.category }}</h2> -->
          <div v-for="(post, index) in filteredPosts" :key="index" class="post">
            <Post :post="post" />
          </div>
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

// TODO this function should be removed in future
// function swap(ar, i, j) {
//   let valI = ar[i]
//   ar[i] = ar[j]
//   ar[j] = valI
//   return ar
// }

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

        // Scrolling up
        // window.$("html, body").animate({ scrollTop: 0 }, "slow")
        // Switched to pureJS, because of the new css style for scroll-behavior
        window.scrollTo(0, 0)

        // let selectedTag = this.State.selectedTag
        let selectedTag = this.$route.params.category
        State.selectTag(selectedTag)
        if (selectedTag && !['Hot', 'Trending', 'Fresh'].includes(selectedTag)) {
          return result.filter(p => (p.tags && p.tags.includes(selectedTag)))
        }

        // TODO when likes and comments will be implemented
        // Hot and Trending will be filtered in better way
        // if (selectedTag == 'Hot' && result.length > 7) {
        //   result = swap(result, 1, result.length - 1)
        //   result = swap(result, 2, result.length - 2)
        // }
        // if (selectedTag == 'Trending' && result.length > 7) {
        //   result = swap(result, 1, result.length - 2)
        //   result = swap(result, 2, result.length - 1)
        // }

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

.posts {
  margin-top: 60px;
}

.help-link {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 5px 15px;
  width: 120px;
  height: 60px;
  color: white;
  text-align: center;
  z-index: 10;
  background: #00be00;
  text-decoration: none;
  font-weight: 500;
  
}

.help-link i {
  position: relative;
  left: 5px;
}

.help-link:hover {
  opacity: 0.5;
}

.help-link span {
  font-size: 10px;
}

.thanks-emoji {
  width: 40px;
  display: inline;
  /* margin: auto; */

}
</style>
