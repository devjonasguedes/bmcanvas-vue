<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <header class="header-app bg-primary text-white">
      <div></div>
      <h1><router-link to="/">Business Model Canvas</router-link></h1>
      <div class="text-right">
        <router-link to="/code">
          <svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-code" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/></svg>
        </router-link>
      </div>
    </header>

    <router-view/>
    
  </div>
</template>

<style lang="scss">

@import url('./css/bootstrap.min.css');

body {
  background: #FBFCFD;
  font-family: 'Roboto', sans-serif;
}

header {
  padding: 20px 15px;
  text-align: center;
  display: flex;
  align-items: center;

  > div {
    &:first-child {
      flex: 1;
    }
    &:last-child {
      flex: 1;
    }
  }

  h1 {
    margin: 0;
    font-size: 1.7rem;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #f8f8f8;
      text-decoration: none;
    }
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
