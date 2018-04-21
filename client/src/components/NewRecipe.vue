<template>
    <div>

        <div class="blog-post card card-body" >
            <h2 class="blog-post-title">Add New Recipe</h2>
            <br>
           <div class="form-group">
               <p>
                   <button class="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                       Custom Settings
                   </button>
               </p>
               <div class="collapse" id="collapseExample">
                   <div class="card card-body">
                       <span>Change Text Color:</span>
                       <pre>{{ color }}</pre>
                       <slider-picker :value="color" @input="updateColorValue"/>
                   </div>
               </div>
           </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Title</label>
            <input v-bind:style="{ color: color }" class="form-control" id="exampleFormControlTextarea1" rows="1" v-model="title">

            <label for="exampleFormControlTextarea2">Description</label>
            <textarea v-bind:style="{ color: color }" class="form-control" id="exampleFormControlTextarea2" rows="5" v-model="description"></textarea>
          </div>
            <button type="submit" class="btn btn-success mb-2" @click="addRecipe">Send</button>
        </div><!-- /.blog-post -->

        <div class="add_recipe">
            <router-link v-bind:to="{ name: 'recipes' }" class="back_link_btn">Back</router-link>
        </div>

    </div>
</template>

<script>
import { Slider } from 'vue-color';
import RecipesServices from '@/services/RecipesService';

export default {

  name: 'newRecipe',
  data() {
    return {
      title: '',
      description: '',
      color: '#000',
    };
  },

  methods: {
    async addRecipe() {
      await RecipesServices.addRecipe({
        title: this.title,
        description: this.description,
        settings: {
          color: this.color,
        },
      });
      this.$swal(
        'Great!',
        'Your recipe has been added!',
        'success',
      );
      this.$router.push({ name: 'recipes' });
    },
    updateColorValue(value) {
      this.color = value.hex;
    },
  },

  components: {
    'slider-picker': Slider,
  },

};

</script>

 Add "scoped" attribute to limit CSS to this component only
<style scoped>

.back_link_btn {
    /*padding: 1.25em;*/
    color: #999999;
}

</style>
