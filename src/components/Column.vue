<template>
  <div class="canvas-column" :id="column.id">

    <div class="canvas-column__title">
      <h2>{{column.title}}</h2>
      <div class="ico">
        <svg width="28px" height="28px" viewBox="0 0 16 16" class="bi bi-app" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
        </svg>
      </div>
    </div>
    
    <div class="canvas-column__helper">
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
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
  width: calc(100% + 128px);
}

#revenue-streams {
  margin-left: -128px;
}

.canvas-column {
  position: relative;
  border: 1px solid #ddd;
  background: white;
  padding: 15px;
  z-index: 0;
  display: flex;
  flex-direction: column;
  min-height: 250px;

  &__title {
    display: flex;
    
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
    opacity: .7;
    user-select: none;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        font-size: 11px;
        font-style: italic;
      }
    }
  }

  &__cards {
    flex: 1;
  }
}

</style>
