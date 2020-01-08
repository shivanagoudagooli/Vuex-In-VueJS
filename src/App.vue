<template>
  <div id="app">
   
    <child-c/>
     <hello />
  </div>
</template>

<script>
import HelloWorld from './components/parent.vue'
import child from './components/child.vue'

export default {
  name: 'app',
  components: {
    'hello':HelloWorld,
    'child-c':child
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
