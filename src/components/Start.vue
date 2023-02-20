<template>
  <div>
    <div class="hello">
      <router-link to="/add-list">Neue Liste erstellen</router-link>
      <router-link to="/search-location">Store in der Nähe finden</router-link>
    </div>
    <div v-if="shoppingList.length > 0" class="lists">
      <span @click="showList = !showList">Aktuelle Liste anzeigen +</span>
      <div v-if="showList" class="current-list">
        <span v-for="(item, index) in shoppingList" :key="index">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      showList: false,
    };
  },
  computed: { ...mapState(["shoppingList"]) },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.lists {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  span:first-child {
    width: 100%;
  }
  .current-list {
    width: 100%;
    border: 2px solid white;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.hello {
  display: flex;
  justify-content: center;
  width: 100%;
  a {
    font-size: 20px;
    margin: 15px;
    color: white;
    border: 2px solid white;
    text-decoration: none;
    height: 255px;
    width: 255px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: #42b983;
        border-color: #42b983;
      }
  }
}
</style>
