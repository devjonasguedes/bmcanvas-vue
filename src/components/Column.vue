<template>
  <div class="canvas-column" :id="column.id">

    <div class="canvas-column__title">
      <h2>{{column.title}}</h2>
      <div class="ico" v-if="column.id === 'key-partners'">
        <svg width="26px" height="26px" viewBox="0 0 16 16" class="bi bi-arrow-left-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/></svg>
      </div>
      <div class="ico" v-if="column.id === 'key-activities'">
        <svg width="26px" height="26px" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/></svg>
      </div>
      <div class="ico" v-if="column.id === 'key-resources'">
        <svg width="26px" height="26px" viewBox="0 0 16 16" class="bi bi-bricks" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2H15V1H5.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z"/></svg>
      </div>
      <div class="ico" v-if="column.id === 'value-proposition'">
        <svg width="26px" height="26px" viewBox="0 0 16 16" class="bi bi-diamond" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/></svg>
      </div>
      <div class="ico" v-if="column.id === 'customer-relationships'">
        <svg width="26px" height="26px" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>
      </div>
      <div class="ico" v-if="column.id === 'channels'">
        <svg width="26px" height="26px" viewBox="0 0 16 16" class="bi bi-truck" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
      </div>
      <div class="ico" v-if="column.id === 'customer-segments'">
        <svg width="26px" height="26px" viewBox="0 0 16 16" class="bi bi-people" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>
      </div>
      <div class="ico" v-if="column.id === 'cost-structure'">
        <svg width="26px" height="26px" viewBox="0 0 16 16" class="bi bi-tag" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"/><path fill-rule="evenodd" d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
      </div>
      <div class="ico" v-if="column.id === 'revenue-streams'">
        <svg width="26px" height="26px" viewBox="0 0 16 16" class="bi bi-graph-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/></svg>
      </div>
    </div>
    
    <div class="canvas-column__helper" v-if="column.cards < 1">
      <ul>
        <li v-for="item in column.helper" :key="item">{{item}}</li>
      </ul>
    </div>

    <div class="canvas-column__cards">
      <slot></slot>
    </div>
    
    <AddCard :column-index="index" />

  </div>
</template>

<script>
import AddCard from '@/components/AddCard'

export default {
  name: 'Column',
  components: {
    AddCard
  },
  props: {
    column: Object,
    index: Number,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#key-partners {
  grid-area: key-partners
}
#key-activities {
  grid-area: key-activities
}
#key-resources {
  grid-area: key-resources
}
#value-proposition {
  grid-area: value-proposition
}
#customer-relationships {
  grid-area: customer-relationships
}
#channels {
  grid-area: channels
}
#customer-segments {
  grid-area: customer-segments
}
#cost-structure {
  grid-area: cost-structure
}
#revenue-streams {
  grid-area: revenue-streams
}

#channels,
#cost-structure,
#revenue-streams {
  .canvas-column__helper {
    top: 48px;
  }
}

#cost-structure,
#revenue-streams {
  width: calc(100% + 118px);

  .canvas-draggable {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    align-items: flex-start;
  }
}

#revenue-streams {
  margin-left: -118px;
}

.canvas-column {
  position: relative;
  border: 1px solid #ddd;
  background: white;
  padding: 15px;
  z-index: 0;
  display: flex;
  flex-direction: column;
  background: white;

  &__title {
    display: flex;
    margin-bottom: 7px;
    
    h2 {
      font-size: 1.1rem;
      flex: 1;
    }

    .ico {
      flex: 2;
      text-align: right;
    }
  }

  &__helper {
    z-index: -1;
    position: absolute;
    width: 100%;
    left: 0;
    top: 70px;
    padding-left: 15px;
    padding-right: 15px;
    opacity: .7;
    user-select: none;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        margin-bottom: 1px;
        font-size: .67rem;
        font-style: italic;
      }
    }
  }

  &__cards {
    flex: 1;
  }
}

</style>
