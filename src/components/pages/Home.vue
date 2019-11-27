<template>
  <div>
    <h1>Coming soon!</h1>
    <!-- <h2>Home</h2>    -->
    <p>
      Without ads, with real privacy and with additional feature: "live emotions" - user can enable access to their camera and client-side ML will be analyzing their emotions to understand their preferences (the results are private by default, but users will be able to enable "public" mode and like or dislike posts by smiling or being angry or sad)
    </p>

    <button class="mdc-button mdc-button--raised centerd">
      <div class="mdc-button__ripple"></div>
      SHOW DIALOG
    </button>

    <Dialog>
      <h5>Anything can be here</h5>
    </Dialog>
  </div>
</template>

<script>

import Dialog from '../Dialog'

export default {
  name: "Home",
  props: {
    text: Number,
    img: String,
  },
  components: {
    Dialog,
  }
}

</script>

<style scoped>
/* TODO */
h1,h2 {
  text-align: center;
}

p {
  margin: auto;
  max-width: 600px;
}
</style>
