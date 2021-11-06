<template>
  <h4> You must create a user profile to perform this action</h4>

  <button type="submit" class="btn btn-primary mt-3" v-on:click="goToUpdateUserProfile()">
    Create user profile
  </button>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class UserProfileRequired extends Vue {
  goToUpdateUserProfile() {
    this.$router.push({ name: 'UserProfileUpdate'});
  }
}
</script>