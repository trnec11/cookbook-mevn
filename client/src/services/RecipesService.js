import Api from '@/services/Api';

export default {
  fetchRecipes() {
    return Api().get('recipes');
  },
};
