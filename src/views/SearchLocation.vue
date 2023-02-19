<template>
  <div class="list">
    <h1>Finde Stores in der Nähe</h1>
    <GoogleMap />
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleMap from "@/components/GoogleMaps.vue";

export default {
  name: "Home",
  components: {
    GoogleMap,
  },
};
</script>

<style scoped lang="scss">
.list {
  h1 {
    padding: 20px;
  }
}
</style>