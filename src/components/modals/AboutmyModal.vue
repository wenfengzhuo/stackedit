<template>
  <modal-inner class="modal__inner-3--about-modal" aria-label="Aboutmy">
    <div class="modal__content">
      This is a fork from StackEdit on <a target="_blank" href="https://github.com/benweet/stackedit/">GitHub</a>
      <br>
      It is for my personal use and has following features that the original software doesn't have:
      <ul>
        <li> Support png/jpg/jpeg images in file explorer from a github repo </li>
        <li> Support browse png/jpg/jpeg images from a github repo</li>
        <li> Support preview png/jpg/jpeg images from a github repo</li>
        <li> Support image releative paths in a github repo </li>
      </ul>
      <small>© MyMarkdown.io for above features</small>
      <br>
      You are welcomed to use this copy if you need above features, otherwise I recommend you to use the original software <a href="https://stackedit.io">StackEdit</a> to respect original authors' hard work on this great browser-based software.
      <br>
    </div>
    <div class="modal__button-bar">
      <button class="button button--resolve" @click="config.resolve()">Close</button>
    </div>
  </modal-inner>
</template>

<script>
import { mapGetters } from 'vuex';
import ModalInner from './common/ModalInner';

export default {
  components: {
    ModalInner,
  },
  data: () => ({
    version: VERSION,
  }),
  computed: {
    ...mapGetters('modal', [
      'config',
    ]),
  },
};
</script>

<style lang="scss">
.modal__inner-3--about-modal {
  text-align: center;

  .logo-background {
    height: 75px;
    margin: 0.5em 0;
  }

  ul {
    text-align: left;
  }

  small {
    display: block;
  }

  hr {
    width: 160px;
    max-width: 100%;
    margin: 1.5em auto;
  }
}

</style>
