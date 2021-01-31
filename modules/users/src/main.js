import './set-public-path';
import Vue from 'vue';
import store from './store';
import router from './router';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

Vue.config.productionTip = false;

// const containerSelector = '#module-users';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    store,
    router,
    render: (h) => h(App),
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

export const devtools = {
  overlays: {
    selectors: [
      "#module-users",
      "#parcel"
    ],
  }
};