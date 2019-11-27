<template>
  <div id="app">
    <div>
      <NavBar />
      <router-view class="view"></router-view>
    </div>   
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
  // TODO connect from the same origin later
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

  $mdc-theme-primary: #00be00;
  $mdc-theme-secondary: #37386f;
  @import "material-components-web/material-components-web";

  header {
    margin: 0;
  }

  body {
    margin: 0;
  }

  .view {
    margin-top: 60px;
  }

  #app {
    margin: 0;
  }

  .centered {
    margin: auto;
    text-align: center;
  }

  .white {
    color: white;
  }


</style>
