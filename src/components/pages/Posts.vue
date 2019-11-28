<template>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-3">
        <Categories />
      </div>
      <div class="mdc-layout-grid__cell--span-6">
        <div class="posts-block">
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

export default {
  name: "Posts",
  props: {
    text: Number,
    img: String,
  },
  components: {
    Categories,
  }
}

</script>

<style scoped>
/* TODO */

.post {
  width: 100%;
  height: 500px;
  background-color: lightcyan;
  margin-bottom: 30px;
}

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
</style>
