<template>
  <div id="nav">
    <Banner v-if="showBanner" :content="$route.meta.banner" />
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
   </div>  
    <router-view /> 
</template>
<script>
import Banner from './components/common/Banner.vue'
export default {
  name: 'App',
  components: {
    Banner,
  },
  computed: {
    showBanner() {
      return this.$route.meta.banner
    }
  }
}
</script>
<style>
html, body {
  font-size: 16px;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* background-color: rgb(87, 79, 79); */
}

#nav {
  position: relative;
  height: 1px;
  /* overflow: hidden; */
} 

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* pre {
  border-left: 6px solid #2b6c92;
}
code {
  font-family: Consolas, Monaco, monospace;
} */

</style>
