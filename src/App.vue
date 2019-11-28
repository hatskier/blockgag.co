<template>
  <div id="app">
    <div>
      <NavBar />
      <router-view 
        v-if="!BlockstackUtils.pendingAuth"
        class="view">
      </router-view>
      <h2
        v-if="BlockstackUtils.pendingAuth"
        class="centered">
        Authentication in progress
      </h2>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import BlockstackUtils from './modules/blockstackUtils'

BlockstackUtils.checkAuth().then(() => {
  if (localStorage.locationBeforeRedirection) {
    let urlToRedirect = localStorage.locationBeforeRedirection
    localStorage.removeItem('locationBeforeRedirection')
    location.href = urlToRedirect
  }
})

window.toastr.options = {
  "closeButton": true,
  "progressBar": false,
  "showDuration": "3000",
  "positionClass": "toast-top-center"
}

export default {
  name: 'app',
  data() {
    return {
      BlockstackUtils,
    }
  },
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
  $mdc-theme-secondary: #092dfa;
  // $mdc-theme-primary: #092dfa;
  // $mdc-theme-secondary: #00be00;
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

  .material-icons {
    position: relative;
    top: 5px;
    margin-right: 10px;
  }

  .toast-top-center {
    position: absolute;
    top: 12px;
    margin: 0 auto;
  }

  .toast {
    opacity: 1 !important;
  }

</style>
