<template>
  <div class="container">
    <Register/>
  </div>
</template>

<script>
import Register from '../components/Register.vue';

  export default {
    name: 'RegisterPage',
    components: { Register }
  }
</script>

<style lang="scss" scoped>
.container{
  margin-top: 10rem;
}
</style>