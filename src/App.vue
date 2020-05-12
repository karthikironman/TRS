<template>
  <div id="app">
  <router-view></router-view>
   
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      
    };
  }
};
</script>
<style scoped>


#app {
  position: absolute;
  top: 0 !important;
  left: 0 !important;
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>
