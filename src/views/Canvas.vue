<template>
  <div class="canvas mt-4 mb-4">
    <div class="container">

      <div class="canvas-board">
        <Column v-for="(column, columnIndex) in canvas" :column="column" :index="columnIndex" :key="column.id" height="100%">
          <draggable v-model="column.cards" group="cards" @end="dragSave" class="canvas-draggable">
            <!-- <div v-for="element in myArray" :key="element.id">{{element.name}}</div> -->
            <Card v-for="(card, cardIndex) in column.cards" :index="cardIndex" :column="columnIndex" :card="card" :key="`card-${cardIndex}`" />
          </draggable>
        </Column>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Column from '@/components/Column'
import Card from '@/components/Card'
import draggable from 'vuedraggable'

import { mapState } from 'vuex'
import { mapActions } from 'vuex'


export default {
  name: 'Canvas',
  components: {
    draggable,
    Column,
    Card
  },
  data() {
    return { }
  },
  mounted() {

    if(localStorage.getItem('canvas')) {

      let canvas = JSON.parse(localStorage.getItem('canvas'));
      this.loadLocalCanvas(canvas)

    }

  },
  computed: {
    ...mapState(['canvas'])
  },
  methods: {
    ...mapActions(['loadLocalCanvas']),
    dragSave() {

      setTimeout(() => {
        localStorage.setItem('canvas', JSON.stringify(this.canvas));
      }, 500);
    }

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.canvas-draggable {
  min-height: 130px;
}

.container {
  max-width: 1200px;
}

.canvas .container {
  min-width: 960px;
}

.canvas-board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  min-height: 700px;
  grid-template-areas: 
    "key-partners key-activities value-proposition customer-relationships customer-segments"
    "key-partners key-resources value-proposition channels customer-segments"
    "cost-structure cost-structure . revenue-streams revenue-streams"
  ;
}

</style>
