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
            <!-- TODO update with live emotions feature -->
            <button @click="logIn()" class="mdc-button mdc-button--outlined">
              <div class="mdc-button__ripple"></div>
                TRY LIVE EMOTIONS
            </button>
          </div>

          <!-- Try also add, add_circle, add_box, add_circle_outline, add_comment, post_add, add_a_photo, add_photo_alternate, add_to_photos, note_add -->
          <button
            v-if="signedIn"
            class="mdc-icon-button material-icons white add-photo-icon">
            add_photo_alternate
          </button>
          <!-- <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Print this page">print</button> -->

          <div class="navbar-el">
            <div @click="openMenu()" class="account-circle mdc-menu-surface--anchor">
              <img
                v-if="signedIn && userAvatar"
                id="avatar-image"
                :src="userAvatar" />

              <div class="username-letter" v-if="signedIn && !userAvatar">
                {{ usernameFirstLetter }}
              </div>

              <div class="mdc-menu mdc-menu-surface">
                <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
                  <li class="mdc-list-item" role="menuitem">
                    <span class="mdc-list-item__text">
                      <i class="material-icons">settings</i>
                      Settings
                    </span>
                  </li>
                  <li @click="logOut()" class="mdc-list-item" role="menuitem">
                    <span class="mdc-list-item__text">
                      <i class="material-icons">
                        directions_walk
                      </i>
                      Log out
                    </span>
                  </li>
                </ul>
              </div>

            </div>

            <button @click="openSignInModal()" v-if="!signedIn" class="mdc-button mdc-button--outlined">
              <div class="mdc-button__ripple"></div>
                SIGN IN
            </button>
          </div>
        </section>
      </div>
    </header>

    <Dialog title="Log in to get started">
      <!-- <h4>What is Blockstack?</h4> -->
      <p class="blockstack-description">
        Blockgag is built using
          <a target="_blank" href="https://blockstack.org/try-blockstack">Blockstack</a>
        infrastructure,
        allowing us to provide decentralized encrypted storage.
      </p>

      <p class="blockstack-description">
        Blockstack ID provides user-controlled login and storage
        that enable you to take back control of your identity and data.
      </p>

      <button @click="logIn()" class="mdc-button mdc-button--raised continue-with-blockstack-button">
        <div class="mdc-button__ripple"></div>
          CONTINUE WITH BLOCKSTACK
      </button>
    </Dialog>

  </div>
</template>

<script>
import BlockstackUtils from '../modules/blockstackUtils'
import Dialog from './Dialog'

import { MDCDialog } from '@material/dialog'
import { MDCMenu } from '@material/menu'

export default {
  name: "NavBar",
  data() {
    // State.loadStateFromBlockchain()

    return {
      userAvatar: BlockstackUtils.getUserAvatar(),
      signedIn: BlockstackUtils.isUserSignedIn(),
      modalType: '',
      dialog: null,
    }
  },
  computed: {
    usernameFirstLetter() {
      let userName = BlockstackUtils.getUserName()
      if (!userName) {
        return ''
      }
      return userName[0].toUpperCase()
    }
  },
  components: {
    Dialog,
  },
  methods: {
    openSignInModal() {
      let elToAttachTo = document.querySelector('.mdc-dialog')
      this.dialog = MDCDialog.attachTo(elToAttachTo)
      this.modalType = 'signIn'
      this.dialog.open()
    },
    closeSignInModal() {
      if (this.dialog) {
        this.dialog.close()
      }
    },
    openMenu() {
      const menu = MDCMenu.attachTo(document.querySelector('.mdc-menu'))
      menu.open = !menu.open
    },
    logIn() {
      this.closeSignInModal()
      window.localStorage.locationBeforeRedirection = location.href;
      window.toastr.success(
        'Blockstack authentication started.'
        + 'You will be redirected to blockstack page in few seconds',
        '',
        {
          "timeOut": "20000",
          "closeButton": false,
        })

      // TODO check this problem later
      // I still don't knwo why it works much faster with this hack
      // It also works well without modal ¯\_(ツ)_/¯
      setTimeout(() => {
        BlockstackUtils.signIn()
      }, 200)
    },
    logOut() {
      BlockstackUtils.signOut()
    }
  }
}
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

  .username-letter {
    // border: 1px solid white;
    color: white;
    background-color: #00be00;
    font-weight: 500;
    font-size: 22px;
    width: 35px;
    height: 35px;
    text-align: center;
    border-radius: 50%;
    line-height: 35px;
  }

  .account-circle {
    cursor: pointer;
  }

  .navbar-el {
    margin-left: 10px;
  }

  .mdc-menu {
    margin-top: 50px;
  }

  .add-photo-icon {
    position: relative;
    top: 0;
    margin: 0;
  }

  p.blockstack-description {
    margin-left: 5px;
    width: 300px;
  }

  .continue-with-blockstack-button {
    color: white !important;
  }
</style>
