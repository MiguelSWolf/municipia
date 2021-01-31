import {
  start,
  registerApplication
} from 'single-spa';

const apps = [
  {
    name: 'users',
    customProps: {
      domElement: '#module-users',
    },
    app: () => System.import('users'),
    activeWhen: location => location.pathname.startsWith('/utilizadores')
  },
  {
    name: 'products',
    app: () => System.import('products'),
    activeWhen: location => location.pathname.startsWith('/produtos')
  }
]

Promise.all([
  System.import('pubsub-js'),
  System.import('snackbar')
]).then(() => {
  apps.forEach(app =>  registerApplication(app) );
  start();
});