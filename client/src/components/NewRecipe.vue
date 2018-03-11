<template>
    <div>
        <div class="blog-post card card-body">
            <h2 class="blog-post-title">Add New Recipe</h2>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Title</label>
            <input class="form-control" id="exampleFormControlTextarea1" rows="1" v-model="title">
            <label for="exampleFormControlTextarea2">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea2" rows="5" v-model="description"></textarea>
            <p>{{ title }}</p>
          </div>
          <button type="submit" class="btn btn-success mb-2" @click="addRecipe">Send</button>
        </div><!-- /.blog-post -->
    </div>
</template>

<script>

import RecipesServices from '@/services/RecipesService';

export default {
  name: 'NewRecipe',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    async addRecipe() {
      await RecipesServices.addRecipe({
        title: this.title,
        description: this.description,
      });
      this.$swal(
        'Great!',
        'Your recipe has been added!',
        'success',
      );
      this.$router.push({ name: 'Recipes' });
    },
  },
};
</script>

 Add "scoped" attribute to limit CSS to this component only
<style scoped>

/*
.blog-form {
    padding: 1.25em;
    border: cornflowerblue 1px solid;
}
*/

</style>
