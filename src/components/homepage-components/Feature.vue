<template>
  <div class="mdc-layout-grid__cell feature-container">
    <i class="material-icons">{{ icon }}</i>
    <h2>{{ title }}</h2>
    <p class="feature-description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    icon: String,
  }
}
</script>

<style scoped>
i {
  font-size: 80px;
  /* text-align: center; */
}

.feature-container {
  text-align: center;
  margin-top: 50px;
}

h2 {
  margin-top: 10px;
}

.feature-description {
  text-align: left;
  width: 300px;
  margin: auto;
  margin-top: 10px;
}
</style>