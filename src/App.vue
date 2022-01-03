<template>
  <div id="nav">
    <Banner v-if="showBanner" :content="$route.meta.banner" />
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
@font-face {
  font-family: 'iconfont';  /* Project id 3104054 */
  src: url('//at.alicdn.com/t/font_3104054_vanorr6yswe.woff2?t=1640851961408') format('woff2'),
       url('//at.alicdn.com/t/font_3104054_vanorr6yswe.woff?t=1640851961408') format('woff'),
       url('//at.alicdn.com/t/font_3104054_vanorr6yswe.ttf?t=1640851961408') format('truetype');
}

html, body {
  font-size: 16px;
  margin: 0;
  padding: 0;
}
 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  /* background-color: rgb(87, 79, 79); */
}

#nav {
  position: relative;
  width: 100%;
  /* overflow: hidden; */
} 

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #6aa88c;
}

i.iconfont {
    font-family: 'iconfont' !important;;
    font-size:1.6rem;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

</style>
