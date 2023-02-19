<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>




<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
#app {
 font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2c3e50;
  color:  white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color:  white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
