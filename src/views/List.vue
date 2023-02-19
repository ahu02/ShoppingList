<template>
  <div class="list">
    <h1>Erstelle deine Einkaufsliste</h1>
    <ShoppingList />
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingList from "@/components/ShoppingList.vue";

export default {
  name: "Home",
  components: {
    ShoppingList,
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
