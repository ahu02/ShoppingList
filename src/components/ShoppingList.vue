<template>
  <div class="list">
    <div class="cancel">
      <button v-if="cat.includes('Fisch')" @click="showInitalCategories">Zurück</button>
      <router-link to="/">Abbrechen</router-link>
    </div>
    <div class="categories">
      <span v-for="(item, index) in cat" :key="index">
        <button class="category" @click="getCategoryData(item)">
          {{ item }}
        </button>
      </span>
    </div>
    <div class="content">
      <div class="list-item" v-if="showSearchBox">
        <input
          type="text"
          class="input item-search"
          placeholder="Suche"
          v-model="searchShoppingItems"
        />
        <input
          type="text"
          v-model="ownItem"
          placeholder="Eigenen Eintrag hinzufügen"
          class="own-entry"
        />
        <button class="add" @click="addOwnItem">+</button>
        <span v-for="(item, index) in filteredList" :key="index">
          <input
            type="checkbox"
            name="checkbox"
            :id="item"
            :value="item"
            v-model="shoppingList"
          />
          <label :for="item">{{ item }}</label>
        </span>
      </div>
      <div   class="list-item" v-else></div>
      <div class="shopping-list" v-if="shoppingList.length > 0">
        <div class="save-btn">
          <button class="save-list" @click="saveList">Save List</button>
        </div>
        <div v-for="(item, index) in shoppingList" :key="index" class="item">
          <span>{{ item }}</span>
          <span class="remove" @click="removeItem(index)">remove</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      cat: ["Lebensmittel", "Haushalt", "Baby", "Drogerie Artikel"],
      shoppingItems: [],
      shoppingList: [],
      searchShoppingItems: "",
      showSearchBox: false,
      ownItem: "",
    };
  },
  props: {
    msg: String,
  },
  computed: {
    filteredList() {
      if (this.searchShoppingItems.length) {
        return this.shoppingItems.filter((item) => {
          const searchCleared = this.searchShoppingItems
            .toLowerCase()
            .replace(" ", "");
          const itemCleared = item.toLowerCase().replace(" ", "");
          return itemCleared.includes(searchCleared);
        });
      }
      return this.shoppingItems;
    },
  },
  methods: {
    ...mapMutations(["setList"]),
    showInitalCategories() {
      this.cat = ["Lebensmittel", "Haushalt", "Baby", "Drogerie Artikel"];
          },
    addOwnItem(){
      this.shoppingList.push(this.ownItem);
    },
    removeItem(index) {
      this.shoppingList.splice(index, 1);
    },
    saveList() {
      this.setList(this.shoppingList);
    },
    getCategoryData(category) {
      this.shoppingItems = [];
      this.showSearchBox = false;
      if (category === "Lebensmittel") {
        axios
          .get(`${process.env.BASE_URL}${category.toLowerCase()}.json`)
          .then((response) => {
            this.cat = [];
            const arr = response.data.categories;
            arr.forEach((elem) => {
              this.cat.push(elem);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        const name = category.toLowerCase().replace(" ", "_");
        axios
          .get(`${process.env.BASE_URL}${name}.json`)
          .then((response) => {
            this.showSearchBox = true;
            const arr = response.data[`${name}`];
            arr.forEach((elem) => {
              this.shoppingItems.push(elem);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
.own-entry {
  width: 200px;
  height: 30px;
  padding-right: 50px;
  margin-top: 15px;
  border: 1px solid white;
  border-radius: 0%;
  &::placeholder{
    font-family: "Varela Round", sans-serif;
  }
}
.add {
  margin-left: -50px;
  position: relative;
    top: -33px;
    right: -256px;
    height: 33px;
    width: 50px;
    background: #42b983;
    color: white;
    border: 0;
    -webkit-appearance: none;
}
.cancel {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  a, button {
    font-family: "Varela Round", sans-serif;
    font-size: 16px;
    color: white;
    text-decoration: none;
    background: #2c3e50;
    border: 2px solid white;
    padding: 10px;
    margin-right: 5px;
    &:hover {
      color: #42b983;
      border-color: #42b983;
    }
  }
}
.list {
  background: #2c3e50;
  .categories {
    display: flex;
    justify-content: center;
    button {
      cursor: pointer;
      font-size: 20px;
      height: 180px;
      width: 180px;
      margin: 20px;
      font-family: "Varela Round", sans-serif;
      border: 2px solid white;
      color: white;
      background: transparent;
      border-radius: 0%;
      &:hover {
        color: #42b983;
        border-color: #42b983;
      }
    }
  }
}
.content {
  display: flex;
  .item-search {
    border-radius: 0%;
    border: none;
    height: 30px;
    padding-left: 5px;
    width: 50%;
    &::placeholder{
    font-family: "Varela Round", sans-serif;
  }
  }
  .shopping-list {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid white;
    padding: 10px;
    margin-right: 202px;
  }
  .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span:not(.remove) {
      list-style: disc;
    }
  }
  .remove {
    width: 20%;
    &:hover {
      text-decoration: underline;
    }
  }
  .list-item {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
    width: 40%;
    margin-left: 190px;
    span {
      padding: 10px;
      display: flex;
    }
  }
}

.save-btn {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  button {
    font-family: "Varela Round", sans-serif;
    background: #42b983;
    color: white;
    border: 1px solid #42b983;
    padding: 10px;
    margin-bottom: 20px;
  }
}
</style>
