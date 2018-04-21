<template>
    <div>
        <h1>LOGIN</h1>

    </div>
</template>

<script>
import { Slider } from 'vue-color';
import UserService from '@/services/UserService';

export default {

  name: 'login',
  data() {
    return {
      userData: [],
    };
  },

  methods: {
    async loginUser() {
      const response = await UserService.loginUser();
      console.log(response);
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
