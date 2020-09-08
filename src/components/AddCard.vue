<template>
  <div class="canvas-add">
    <form v-on:submit.prevent="add(columnIndex)">
      <input type="text" placeholder="Create post-it" v-model.trim="text">
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'AddCard',
  props: {
    columnIndex: Number
  },
    computed: {
    ...mapState(['canvas'])
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    ...mapActions(['addCard']),
    add(index) {

      if(!this.text) {
        return false
      }

      let payload = {
        column: index,
        card: {
          text: this.text,
          color: 'yellow'
        }
      }
      
      this.addCard(payload)
      this.text = ''

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.canvas-add {
  margin: 0 -15px -15px -15px;
  padding: 5px 15px;

  input {
    border: 0;
    outline: 0;
    width: 100%;
    padding: 3px 10px 3px 15px;
    font-size: .9rem;
    background: #f3f3f3;
  }
}

</style>
