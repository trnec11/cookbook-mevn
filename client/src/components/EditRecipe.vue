<template>
    <div>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit Recipe</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Title:</label>
                            <input type="text" class="form-control" id="recipient-name" v-model="title">
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Description:</label>
                            <textarea class="form-control" id="message-text" rows="10" v-model="description"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save recipe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import RecipesServices from '@/services/RecipesService';

export default {
  name: 'updateRecipe',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  mounted() {
    this.getRecipe();
  },
  methods: {
    async getRecipe() {
      const response = await RecipesServices.getRecipe({
          id: this.$route.params.id,
      })
      console.log(response.data.list);
      this.title = response.data.list.title;
      this.description = response.data.list.description;
    },
    async updateRecipe() {
      await RecipesServices.updateRecipe({
        id: this.$route.params.id,
        title: this.title,
        description: this.description,
      });
      this.$swal(
        'Great!',
        'Your post has been updated!',
        'success',
      );
      this.$router.push({ name: 'recipes' });
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
</style>
