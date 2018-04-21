import Api from '@/services/Api';

export default {
  loginUser(params) {
    return Api().get('user/login');
  },
};
