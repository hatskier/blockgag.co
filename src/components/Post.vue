<template>
  <div v-if="!isHidden && post.imgGaiaPublicUrl" :id="'post' + post._id" class="post mdc-elevation--z1">
    <!-- {{ post._id }}
    |||
    {{ State.visiblePost }} -->

    <!-- {{ post }} -->

    <div v-if="post.description" class="post-description">
      {{ post.description }}
    </div>
    <!-- {{ post._id }} -->
    <!-- {{ post._id }} -->

    <!-- <div class="tags">
      {{ post.tags }}
    </div> -->

    
    <img v-lazy="post.imgGaiaPublicUrl" class="image-in-post" />

    <div class="posted-time">
      Added {{ timeAgoPosted }}
      <div v-if="isThisPostLiked" class="liked-emoji">
        😁
      </div>
    </div>

    
  </div>
</template>

<script>

import State from '../modules/state'
import HiddenPosts from '../hiddenPostsHardcoded'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

const INTERSECTION_TRESHOLD = 0.8

export default {
  name: "Post",
  props: {
    post: Object,
  },
  data() {
    return {
      State,
    }
  },
  computed: {
    timeAgoPosted() {
      return timeAgo.format(new Date(this.post.createdAt))
    },
    isHidden() {
      return HiddenPosts.includes(this.post._id)
    },
    isThisPostLiked() {
      return State.likes[this.post._id]
    }
  },
  mounted() {
    if (HiddenPosts.includes(this.post._id)) {
      return
    }
    let observer = new IntersectionObserver((isVisible, entry) => {
      this.visibilityChanged(isVisible, entry)
    }, {
      threshold: INTERSECTION_TRESHOLD
    })
    observer.observe(document.getElementById('post' + this.post._id))
  },
  methods: {
    visibilityChanged(entry) {
      if (entry[0].isIntersecting) {
        State.setVisiblePost(this.post._id)
      }
      
    },
    getMainContainer() {
      // return document.querySelector('#scrollArea')
      return null
    }
  }
}

</script>

<style scoped>
.image-in-post {
  /* max-height: 90vh;
  max-width: 45vw;
  min-width: 50vh; */
  /* Some magic is going here - analyze later */
  width: 48vw;
  height: auto;
  max-width: none;
  max-height: 70vh;
  object-fit: contain;
  margin: auto;
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
}

.post {
  margin-bottom: 50px !important;
  /* margin: auto; */
  width: 50vw;
}

.posted-time {
  font-size: 12px;
  position: relative;
  bottom: 10px;
  /* left: 15px; */
  text-align: center;
  color: darkgray;
}

.post-description {
  padding-top: 20px;
  font-size: 25px;
  /* padding-left: 20px; */
  font-weight: 500;
  /* margin-bottom: 20px; */
  text-align: center;
}

.liked-emoji {
  /* position: absolute; */
  /* right: 3px; */
  /* bottom: 3px; */
  margin: auto;
  font-size: 25px;
  animation-name: like-animation;
  animation-duration: 1s;
}

@keyframes like-animation {
  from { transform: translateY(-200px) scale(10); }
  to { transform: none; opacity: 1; }
}
</style>
