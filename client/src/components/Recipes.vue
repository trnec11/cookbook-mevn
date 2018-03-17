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
                <div class="item_control">
                    <router-link class="item_edit" v-bind:to="{ name: 'updateRecipe', params: { id: recipe._id } }">Edit</router-link>
                    <a class="item_delete" @click="deleteRecipe( recipe._id )">Delete</a>
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
import AlertMessages from '@/services/AlertMessages';

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
      this.recipes = response.data.lists;
    },
    async deleteRecipe(recipeId) {
      this.$swal(AlertMessages.deleteMessage())
        .then((result) => { 
          if (result.value) {
            RecipesServices.deleteRecipe({id: recipeId});
            this.$swal('Deleted!', 'Your file has been deleted.', 'success').
              then(() => {
                this.$router.go('/')
              })
          } else {
            this.$swal('Something was wrong')
          }                
        })
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

  .item_control {
    padding: 1em 0;
  }

  .item_control a {
    text-decoration: none;
    color: #fff;
    border-radius: 5%;
    margin-right: .5em;
  }
  .item_control a:hover {
    box-shadow:
      1px 1px #f5ff6a,
      2px 2px #f5ff6a,
      3px 3px #f5ff6a;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    color: #f5ff6a;
  }

  .item_edit {
    padding: .7em;
    background: rgb(90, 160, 10); 
  }

  .item_delete {
    padding: .7em;
    background: rgb(226, 4, 4)0; 
  }

    /* Pagination */
  .blog-pagination {
    margin-bottom: 4rem;
  }
  .blog-pagination > .btn {
    border-radius: 2rem;
  }

  /*
   * Blog posts
   */
  .blog-post {
    margin-bottom: 4rem;
  }
  .blog-post-title {
    margin-bottom: .25rem;
    font-size: 2.5rem;
  }
  .blog-post-meta {
    margin-bottom: 1.25rem;
    color: #999;
  }
</style>
