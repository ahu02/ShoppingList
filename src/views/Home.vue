<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Shoppinglist App!</h1>
    <StartPage />
  </div>
</template>

<script>
// @ is an alias to /src
import StartPage from '@/components/Start.vue'

export default {
  name: 'Home',
  components: {
    StartPage
  }
}
</script>
