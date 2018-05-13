require(
  // configuration
  {
    paths: {
      // the Vue lib
      'Vue': '../lib/vue/vue',
      // Vue RequireJS loader
      'vue': '../lib/vue/requirejs-vue'
    },
    config: {}
  },
  // load libs right now
  ['Vue', 'vue'],
  function(Vue, vue){
    // now load our single-file-component app
    // syntax: <vue loader module>!<relative path to .vue file>
    require(['vue!app'], function(app){
      // mount app. Voila!
      app.$mount('#app');
    });
  }
);
