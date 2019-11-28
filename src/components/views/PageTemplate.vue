<template>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell"></div>
      <div class="mdc-layout-grid__cell"></div>
      <div class="mdc-layout-grid__cell"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PageTemplate",
  props: {
    text: Number,
    img: String,
  }
}

</script>

<style scoped>
/* TODO */
</style>
