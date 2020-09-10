<template>
  <div class="canvas-card" :class="`card-${color}`">
    <div class="select-color d-none">
      <div v-for="color in colors" :key="color" :class="`card-${color}`" @click="selectColor($event, color)"></div>
    </div>
    <div class="canvas-card__header">
      <ul>
        <li>
          <a @click.prevent="remove(index)" href="#" title="Remover post-it"><svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></a>
        </li>
        <li>
          <a href="#" @click="showColors($event)">
            <svg width="10px" height="10px" viewBox="0 0 16 16" class="bi bi-circle-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/></svg>
          </a>
        </li>
      </ul>
      <ul>
        <li v-if="loadCard"><span class="card-loading"></span></li>
      </ul>
    </div>
    <div class="canvas-card__text">
      <span contenteditable @focusout="changeText($event)">{{card.text}}</span>
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
    return {
      delayText: null,
      loadCard: false,
      colors: [
        'yellow',
        'green',
        'pink',
        'blue',
        'white',
      ]
    }
  },
  methods: {
    ...mapActions(['removeCard']),
    remove(index) {

      this.removeCard({
        index: index,
        column: this.column
      });

    },
    changeText(event) {

      this.loadCard = true;
      
      clearTimeout(this.delayText) 
      this.delayText = setTimeout(() => {
        
        this.loadCard = false

        this.canvas[this.column].cards[this.index].text = event.target.innerText
        
        localStorage.setItem('canvas', JSON.stringify(this.canvas))

      }, 500);

    },
    showColors(event) {
      event.target.closest('div').previousSibling.classList.toggle('d-none')
    },
    selectColor(event, color) {

      this.canvas[this.column].cards[this.index].color = color
      
      event.target.parentElement.classList.add('d-none')

      localStorage.setItem('canvas', JSON.stringify(this.canvas))

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

      //  '#FEC530',
      //   '#B7E0C2',
      //   '#FF9AB0',
      //   '#D8EDFA',
      //   '#f3f3f3',

.card-yellow { background: #FEC530; }
.card-green { background: #B7E0C2; }
.card-pink { background: #FF9AB0; }
.card-blue { background: #D8EDFA; }
.card-white { background: #f3f3f3; }

// @keyframes card {
//   from {
//     transform: translate3d(0, 5px, 0);
//     opacity: 0;
//   }
//   to {
//     transform: translate3d(0, 0, 0);
//     opacity: 1;
//   }
// }

.canvas-card {
  position: relative;
  border-radius: 2px;
  margin-bottom: 10px;
  max-width: 193px;
  min-width: 153px;
  box-shadow: 0 0 5px rgba(#000, 0.2);
  // animation: card .2s ease-out forwards;

  &__header {
    display: flex;
    justify-content: space-between;
    height: 23px;
    cursor: move;
    box-shadow: inset 0 0 0 100px rgba(#000, 0.06);
    

    ul {
      display: flex;
      padding: 0 5px;
      margin: 0;
      li {
        list-style: none;
        opacity: .7;

        a {
          display: block;
          height: 23px;
          color: #222;
          padding: 0 5px;
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

.select-color {
  position: absolute;
  top: -30px;
  width: 100%;
  height: 30px;
  // box-shadow: 0 2px 15px rgba(#000, 0.3);
  border-radius: 4px;
  background: #ffffff;
  z-index: 0;
  display: flex;

  div {
    position: relative;
    height: 100%;
    z-index: 1;
    flex: 1;
    cursor: pointer;
  }
}

.card-loading {
  margin-top: 7px;
  display: block;
  width: 10px;
  height: 10px;
  border: 1px solid black;

  border-right-color: darken(#FEC530, 10%);
  border-radius: 50%;
  animation: cardLoading .5s ease infinite alternate;
}

@keyframes cardLoading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
