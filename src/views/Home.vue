<template>
  <div class="home">
    <!-- <div>CSS</div>
    <div>Javascript</div>
    <div>Vue</div> -->
    <h1>前端常见问题收集</h1>
    <ul class="link">
      <li v-for="item in cat" :key="item">
        <router-link :to="`/${item}`" >{{item}}</router-link>
      </li>
    </ul>
    <!-- <div class="item"><router-link to="/css" >CSS</router-link></div>
    <div class="item"><router-link to="/javascript" >Javascript</router-link></div>
    <div class="item"><router-link to="/vue" >Vue</router-link></div>
    <div class="item"><router-link to="/http" >HTTP</router-link></div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Flex from '@/components/flex/Flex.vue'

export default {
  name: 'Home',
  data() {
    return {
      category: ['css', 'javascript', 'vue', 'http']
    }
  },
  computed: {
    cat() {
      return this.category.map(item => item.toUpperCase()).sort((a, b) => a.length - b.length)
    }
  }
}
</script>

<style scoped>
  .home {
    position: relative;
    box-sizing: border-box;
    font-size: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }
  ul.link {
    /* position: absolute;
    left: 0;
    right: 0;
    bottom: 2rem; */
  }
  ul, li{
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  
  ul.link, h1 {
    width: 80%;
    margin: 0 auto;
  }
  ul.link > li {
    text-align: left;
    list-style: none;
    font-size: 3rem;
    font-weight: bold;
    line-height: 100%;
  }
  a:hover, a:link, a:visited, a:active {
    color: #191c1f;
  }

  a {
    position: relative;
    text-decoration: none;
    display: inline-block;
    
  }

  a::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 4px;
    background: black;
    display: inline-block;
    left: 0;
    bottom: 0;
    transform-origin: 0;
    transform: scaleX(0);
    transition: transform 200ms ease-in;
  }

  a:hover::after {
    transform: scaleX(1);
  }

  .item {
    position: relative;
    margin-top: .5rem;
    box-sizing: border-box;
  }
  
</style>
