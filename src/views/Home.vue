<template>
  <div class="home">
    <h4>前端常见问题收集</h4>
    <p class="split"></p>
    <ul class="link">
      <li v-for="item in cat" :key="item">
        <router-link :to="`/${item}`" >{{item}}</router-link>
      </li>
    </ul>
    <footer>
      <div>
        <p class="contentBox">Created by Tabshifty</p>
        <p class="contentBox">Powerd by Vue</p>
        <p class="contentBox date">@2021-12</p>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
const setVh = function() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
export default {
  name: 'Home',
  data() {
    return {
      category: ['css', 'javascript', 'vue', 'http']
    }
  },
  mounted() {
    this.$nextTick(()=>{
      setVh()
    })
    window.onresize = setVh
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
    padding-bottom: 20rem;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
  }
  
  ul, li{
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  h4 {
    float: right;
    margin-right: 9%;
    height: 3rem;
    padding: 1rem;
    line-height: 3rem;
    border: 1px solid black;
    outline: 5px solid rgb(0, 0, 0);
    outline-offset: 5px;
  }
  h4::after {
    content: '';
    width: 1px;
    clear: both;
  }

  p.split {
    margin-top: 10rem;
    min-height: 1rem;
    /* background: #191c1f; */
  }

  ul.link {
    position: absolute;
    width: 80%;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 7rem;
  }
  ul.link > li {
    text-align: left;
    list-style: none;
    font-size: 3rem;
    font-weight: bold;
    line-height: 100%;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    text-align: left;
    width: 100%;
    height: 5rem;
    left: 0;
    bottom: 0;
    background-color: #d0d9e2;
    vertical-align: bottom;
    justify-content: center;
    align-items: center;
  }
  footer>div {
    width: 80%;
  }
  footer p {
    margin: .2rem 0;
    font-size: .8rem;
    color: rgb(109, 96, 96);
  }
  /* footer >p.date {
    
  } */

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
