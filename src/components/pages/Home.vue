<template>
  <div>
    <h1>Coming soon!</h1>
    <!-- <h2>Home</h2>    -->
    <p>
      Without ads, with real privacy and with additional feature: "live emotions" - user can enable access to their camera and client-side ML will be analyzing their emotions to understand their preferences (the results are private by default, but users will be able to enable "public" mode and like or dislike posts by smiling or being angry or sad)
    </p>

    <button @click="openDialog('first')" class="mdc-button mdc-button--raised centerd">
      <div class="mdc-button__ripple"></div>
      SHOW DIALOG 1
    </button>

    <button @click="openDialog('second')" class="mdc-button mdc-button--raised centerd">
      <div class="mdc-button__ripple"></div>
      SHOW DIALOG 2
    </button>

    <Dialog title="Test title">
      <div v-if="modalContent == 'first'">
        <h5>First</h5>  
        <button @click="updateModalContent()" class="mdc-button mdc-button--raised centerd">
          <div class="mdc-button__ripple"></div>
          Change CONTENT
        </button>
      </div>
      <div v-if="modalContent == 'second'">
        <h5>Second</h5>  
      </div>
      <div v-if="modalContent == 'updated'">
        <h5>Updated content hahahah</h5>  
      </div>
    </Dialog>
  </div>
</template>

<script>

import Dialog from '../Dialog'
import { MDCDialog } from '@material/dialog'

export default {
  name: "Home",
  data() {
    return {
      modalContent: 'first'
    }
  },
  props: {
    text: Number,
    img: String,
  },
  components: {
    Dialog,
  },
  methods:{
    openDialog(type) {
      this.modalContent = type

      let dialog = MDCDialog.attachTo(document.querySelector('.mdc-dialog'))
      dialog.open()
    },
    updateModalContent() {
      this.modalContent = 'updated'
    }
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
