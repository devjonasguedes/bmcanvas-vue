<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <header class="header-app bg-primary text-white">
      <h1>Business Model Canvas</h1>
    </header>

    <router-view/>
    
  </div>
</template>

<style lang="scss">

@import url('./css/bootstrap.min.css');

body {
  font-family: 'Roboto', sans-serif;
}

header {
  padding: 20px 15px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 1.7rem;
  }
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
