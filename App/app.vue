<template>
  <div class="vue-app">
    <h2>{{msg}}</h2>
    <div id="dynamic-placeholder">
      <a href="#" @click.prevent="loadAnotherComponent" class="btn btn-secondary">Load dynamic component</a>
    </div>
  </div>
</template>

<script>
// require Vue
define(['Vue'], function(Vue){
  // create and return app instance
  // refer template as `template`
  return new Vue({
    template: template,
    data: {
      msg: 'Vue + RequireJS template'
    },
    methods: {
      loadAnotherComponent () {
        // example of dynamic Vue loading
        require(['vue!dynamic'], function(component){
          // mount it
          component.$mount('#dynamic-placeholder');
        })
      }
    }
  })
});
</script>

<style scoped>
  .vue-app {
    padding: 30px;
    background-color: #ddd;
    border: 3px solid #999;
    border-radius: 6px;
  }
</style>
