<template>
  <div class="canvas-card" :class="`card-${color}`">
    <div class="canvas-card__header">
      <ul>
        <li>
          <a @click.prevent="remove(index)" href="#" title="Remover post-it"><svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></a>
        </li>
      </ul>
    </div>
    <div class="canvas-card__text">
      <span contenteditable>{{card.text}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'Card',
  props: {
    card: Object,
    column: Number,
    index: Number
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['removeCard']),
    remove(index) {

      this.removeCard({
        index: index,
        column: this.column
      });

    }
  },
  computed: {
    ...mapState(['canvas']),
    color() {
      return this.card.color ? this.card.color : 'yellow'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card-yellow {
  background: #FEC530;
}

@keyframes card {
  from {
    transform: translate3d(0, 5px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.canvas-card {
  border-radius: 2px;
  margin-bottom: 10px;
  animation: card .2s ease-out forwards;

  &__header {
    display: flex;
    justify-content: space-between;
    height: 23px;
    // cursor: move;
    background: darken(#FEC530, 10%);

    ul {
      display: flex;
      padding: 0 5px;
      margin: 0;
      li {
        list-style: none;

        a {
          display: block;
          height: 23px;
          color: #222;
          padding: 0 2px;
          transition: .2s ease-in-out;

          &:hover {
            background: rgba(#000, 0.1);
          }
        }
      }
    }
  }

  &__text {
    padding: 10px;
    font-size: 14px;
    
    span {
      display: block;
      outline: none;
    }
  }
}

</style>
