import Vue from 'vue';
import Router from 'vue-router';
import Recipes from '@/components/Recipes';
import NewRecipe from '@/components/NewRecipe';
import EditRecipe from '@/components/EditRecipe';
import UserLogin from '@/components/UserLogin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recipes',
      component: Recipes,
    },
    {
      path: 'recipes/add',
      name: 'newRecipe',
      component: NewRecipe,
    },
    {
      path: 'recipes/:id/edit',
      name: 'updateRecipe',
      component: EditRecipe,
    },

    {
      path: '/',
      name: 'recipes',
      component: Recipes,
    },
    {
      path: 'recipes/add',
      name: 'newRecipe',
      component: NewRecipe,
    },
    {
      path: 'recipes/:id/edit',
      name: 'updateRecipe',
      component: EditRecipe,
    },
    {
      path: 'user/login',
      name: 'login',
      component: UserLogin,
    },
  ],
});
