<template>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">First name</label>
    <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp">
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last name</label>
    <input type="text" class="form-control" id="lastName">
  </div>

  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" id="username">
  </div>

  <button type="submit" class="btn btn-primary">Update</button>
</form>  
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class UserProfileUpdate extends Vue {

}
</script>