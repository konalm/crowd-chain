<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">crowd chain</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-for="link in links" :key="link.name">
        <router-link class="nav-link" :to="link.path"> {{ link.name }} </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Header extends Vue {
  links = [
    {
      name: 'home',
      path: '/'
    }, {
      name: 'posts',
      path: '/posts'
    }, {
      name: 'create post',
      path: '/create-post'
    }, {
      name: 'user profile',
      path: '/user-profile'
    }
  ]
}

</script>