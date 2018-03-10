import Api from '@/services/Api';

export default {
  fetchRecipes() {
    return Api().get('recipes');
  },

  addPost(params) {
    return Api().post('add_post', params);
  },

  updatePost(params) {
    return Api().put(`posts/${params.id}`, params);
  },

  getPost(params) {
    return Api().get(`post/${params.id}`);
  },

  deletePost(id) {
    return Api().delete(`posts/${id}`);
  },
};
