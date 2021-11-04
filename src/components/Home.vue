<template>
  <h1>Home</h1>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Header from './patterns/Header.vue';

@Options({
  components: {
    Header
  }
})

export default class Home extends Vue {

}
</script>