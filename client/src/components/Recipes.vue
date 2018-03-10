<template>
    <div>
        <h1 class="blog-header">Recipes:</h1>
        <hr>
        <div class="blog-post" v-for="recipe in recipes" :key="recipe.id">
            <h2 class="blog-post-title">{{ recipe.title }}</h2>
            <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>
            <p>{{ recipe.description }}</p>
        </div><!-- /.blog-post -->
    </div>
</template>

<script>

import RecipesServices from '@/services/RecipesService';

export default {
  name: 'Recipes',
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
      console.log(response.data.lists);
      this.recipes = response.data.lists;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->
<!--h1, h2 {-->
  <!--font-weight: normal;-->
<!--}-->
<!--ul {-->
  <!--list-style-type: none;-->
  <!--padding: 0;-->
<!--}-->
<!--li {-->
  <!--display: inline-block;-->
  <!--margin: 0 10px;-->
<!--}-->
<!--a {-->
  <!--color: #42b983;-->
<!--}-->
<!--</style>-->
