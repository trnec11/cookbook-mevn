<template>
    <div>
        <h1 class="blog-header">Recipes:</h1>
        <hr>
        <div v-if="recipes.length > 0">
            <div class="add_recipe">
                <router-link v-bind:to="{ name: 'newRecipe' }" class="add_post_link">Add Recipe</router-link>
            </div>
            <hr>
            <div class="blog-post" v-for="recipe in recipes" :key="recipe.id">
                <h2 class="blog-post-title">{{ recipe.title }}</h2>
                <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>
                <p>{{ recipe.description }}</p>
                <div class="edit_recipe">
                    <router-link v-bind:to="{ name: 'updateRecipe', params: { id: recipe._id } }">Edit</router-link>
                </div>
            </div><!-- /.blog-post -->


            <nav class="blog-pagination">
                <a class="btn btn-outline-primary" href="#">Older</a>
                <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
            </nav>
        </div>
        <div v-else>
            <div class="add_recipe">
                <router-link v-bind:to="{ name: 'newRecipe' }" class="add_post_link">Add Recipe</router-link>
            <br>
            </div>
            nothing yet
            <br>
        </div>
    </div>
</template>

<script>

import RecipesServices from '@/services/RecipesService';

export default {
  name: 'recipes',
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
      this.recipes = response.data.lists.sort();
    },
  },
};
</script>

 Add "scoped" attribute to limit CSS to this component only
<style scoped>
    a {
        color: #4d7ef7;
        text-decoration: none;
    }
    a.add_post_link {
        background: #4d7ef7;
        color: #fff;
        padding: 10px 80px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
    }

    .add_recipe {
        padding: 1.25em 0;
    }

    .edit_recipe {
        display: inline-block;
        padding: .75em 0;
    }
</style>
