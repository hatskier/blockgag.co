<template>
  <div class="post mdc-elevation--z1">
    <img v-lazy="post.imgGaiaPublicUrl" class="image-in-post" />
  </div>
</template>

<script>

export default {
  name: "Post",
  props: {
    post: Object,
  }
}

</script>

<style scoped>
.image-in-post {
  max-height: 80vh;
  max-width: 45vw;
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
</style>
