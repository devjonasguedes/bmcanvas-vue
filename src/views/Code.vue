<template>
  <div class="code">

    <div class="container mt-4 mb-4">
      <div class="row">
        <div class="col-md-6">
          <h5 class="mb-3">Copy and save wherever you want</h5>
          <div class="code-canvas">
            <span v-if="data">{{data}}</span>
            <span v-else>Create some post-it or load the code in the side area</span>
          </div>
        </div>
        <div class="col-md-6">
          <h5 class="mb-3">Paste here to load</h5>
          <form @submit.prevent="sendCanvas">
            <textarea name="" class="form-control mb-3" id="" rows="10" v-model="canvas"></textarea>
            <button class="btn btn-primary" type="submit">Load</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Code',
  components: {},
  data() {
    return {
      canvas: '',
      data: localStorage.getItem('canvas')
    }
  },
  mounted() {},
  methods: {
    sendCanvas() {
      localStorage.setItem('canvas', this.canvas);
      this.$router.push('/')
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.code-canvas {
  background: #ddd;
  padding: 10px 20px;
  height: 300px;
  overflow: auto;
}

textarea {
  height: 300px;
}

</style>
