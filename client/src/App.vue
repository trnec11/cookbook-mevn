<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>
import Recipes from './components/Recipes';
import NewRecipe from './components/NewRecipe';

export default {
  name: 'App',

/*  components: {
      AppNewRecipe,
      'app-recipes': Recipes,
    'app-new-recipe': NewRecipe,
  },*/
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/* stylelint-disable selector-list-comma-newline-after */  
}
</style>
