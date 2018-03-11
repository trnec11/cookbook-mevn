import Api from '@/services/Api';

export default {
  fetchRecipes() {
    return Api().get('recipes');
  },

  addRecipe(params) {
    return Api().post('recipes/add', params);
  },

  updateRecipe(params) {
    return Api().put(`recipes/${params.id}`, params);
  },

  getRecipe(params) {
    return Api().get(`recipes/${params.id}`);
  },

  deleteRecipe(id) {
    return Api().delete(`recipes/${id}`);
  },
};
