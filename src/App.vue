<template>
<Header />
<div class="container mt-4">
  <router-view />
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import Home from './components/Home.vue';
import Header from './components/patterns/Header.vue';
import router from './router';

@Options({
  components: {
    HelloWorld,
    Home,
    router,
    Header
  },
})
export default class App extends Vue {}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
