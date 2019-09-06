<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <!-- 
      <Sample message="hogehoge" />
    -->
    <Axios />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Sample from './components/Sample.vue'
import Axios from './components/learn/Axios.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    // Sample
    Axios
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

