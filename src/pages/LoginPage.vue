<template>
  <div class="container">
    <login/>
  </div>
</template>

<script>
import Login from '../components/Login.vue';

  export default {
    name: 'LoginPage',
    components: { Login }

  }
</script>

<style lang="scss" scoped>
.container{
  margin-top: 10rem;
}
</style>