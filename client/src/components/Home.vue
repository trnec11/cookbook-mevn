<template>
  <div class="hello">
    <h1>Home</h1>
      <div v-for="recipe in recipes" :key="recipe.id">
          <h3>{{ recipe.title}}</h3>
          <p>{{ recipe.description }}</p>
      </div>
  </div>
</template>

<script>

import RecipesServices from '@/services/RecipesService';

export default {
  name: 'Home',
  data() {
    return {
      recipes: [],
      errors: [],
    };
  },
  mounted() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      const response = await RecipesServices.fetchRecipes();
      this.recipes = response.data;
    },
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
