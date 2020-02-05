import Vue from 'vue'
import App from './App'
import router from './js/router'
import store from './js/store'
import tool from './js/tool'
import config from './js/config'
window.all={};
all.store=store;
all.router=router;
all.tool=tool;
all.config=config;

Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    store,
  render: h => h(App)
});
