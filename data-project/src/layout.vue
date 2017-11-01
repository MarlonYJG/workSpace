<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}
body {
  box-sizing: border-box;
  margin: 1px 0;
  color: #495060;
  background: #fff;
  overflow: hidden;
}
ul,li,input,textarea{
  margin: 0;
  padding: 0;
}
</style>
