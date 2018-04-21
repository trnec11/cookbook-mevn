<template>
  <div id="app">
    <app-nav/>
    <router-view/>

  </div>
</template>

<script>
import AppNav from '@/components/AppNav';

export default {
  name: 'App',
  components: {
    'app-nav': AppNav,
  },
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
