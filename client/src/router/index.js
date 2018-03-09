import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Recipe from '@/components/Recipe';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/recipes/:id',
      name: 'recipe', // name property is set on the parent route
      component: Recipe,
    },

    {
      path: '/recipes',
      component: Home,
    },
  ],
});
