<template>
  <div class="home">
    <!-- <div>CSS</div>
    <div>Javascript</div>
    <div>Vue</div>
    <div>Http</div> -->
    <router-link to="/css" ><div class="cssBox">CSS</div></router-link>
    <router-link to="/javascript" ><div class="jsBox">Javascript</div></router-link>
    <router-link to="" >Vue</router-link>
    <router-link to="" >HTTP</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import Flex from '@/components/flex/Flex.vue'

export default {
  name: 'Home',
  components: {

  }
}
</script>
