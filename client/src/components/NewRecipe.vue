<template>
    <div>
        <div class="blog-post card card-body">
            <h2 class="blog-post-title">Add New Recipe</h2>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Title</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            <label for="exampleFormControlTextarea2">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea2" rows="5"></textarea>
          </div>
          <button type="submit" class="btn btn-success mb-2">Send</button>
        </div><!-- /.blog-post -->
    </div>
</template>

<script>

import RecipesServices from '@/services/RecipesService';

export default {
  name: 'New Recipe',
  data() {
    return {
      recipes: [],
      errors: [],
    };
  },
  // mounted() {
  //   this.getRecipes();
  // },
  // methods: {
  //   async getRecipes() {
  //     const response = await RecipesServices.fetchRecipes();
  //     console.log(response.data.lists);
  //     this.recipes = response.data.lists;
  //   },
  // },


};
</script>

 Add "scoped" attribute to limit CSS to this component only
<style scoped>

.blog-form {
    padding: 1.25em;
    border: cornflowerblue 1px solid;
}

</style>
