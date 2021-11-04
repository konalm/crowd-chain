<template>
<div class="card">
  <div class="card-body">
    <h5 class="card-title mb-4">User profile</h5>

    <p>first name: {{ firstName }}</p>
    <p>last name: {{ lastName }} </p>
    <p>username: {{ username }}</p>

    <button type="button" class="btn btn-primary mt-2">update</button>
  </div>
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class UserProfile extends Vue {
  firstName = 'John';
  lastName = 'Doe';
  username = 'JohnDoe123'

}
</script>