<template>
  <div id="navbar">
    <header class="mdc-top-app-bar mdc-top-app-bar--dense">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <img id="navbar-logo" src="../../public/blockgag-logo.png" />
          <!-- <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button> -->
          <span class="mdc-top-app-bar__title white">GAG</span>
        </section>

        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <!-- <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Download">file_download</button>
          <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Print this page">print</button> -->
          <div class="navbar-el">
            <button class="mdc-button mdc-button--outlined">
              <div class="mdc-button__ripple"></div>
                TRY LIVE EMOTIONS
            </button>
          </div>

          <div class="navbar-el">
            <!-- TODO update src for the image -->
            <img
              id="avatar-image"
              src="https://gaia.blockstack.org/hub/1JW2HE6yTzSG6jUAU8H9n7WqxfG6bFbSas//avatar-0" />
          </div>
        </section>
      </div>
    </header>

  </div>
</template>

<script>
// import NavBarLink from './NavBarLink.vue';
// import Blockchain from '../modules/blockstackUtils'
// import State from '../modules/state'
// import Vue from 'vue'
// import * as mdc from 'material-components-web'
// import TopAppBar from 'material-components-vue/dist/top-app-bar'
// import IconButton from 'material-components-vue/dist/icon-button'

export default {
  name: "NavBar",
  data() {
    // State.loadStateFromBlockchain()

    return {
      
    }
  },
  computed: {},
  components: {
  },
  methods: {}
};
</script>

<style lang="scss" scoped>

  .mdc-top-app-bar {
    top: 0;
  }

  .mdc-top-app-bar__row {
    background: black;
  }

  .navbar {
    margin-bottom: 100px;
  }

  #logo-in-navbar {
    width: 40px;
  }

  #navbar-logo {
    height: 30px;
  }

  #avatar-image {
    margin-top: 5px;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    border: 1px solid white;
    object-position: center;
    object-fit: cover;
  }

  .navbar-el {
    margin-left: 10px;
  }
</style>
