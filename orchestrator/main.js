import {
  start,
  registerApplication
} from 'single-spa';

const apps = [
  {
    name: 'users',
    app: () => System.import('users'),
    activeWhen: location => location.pathname.startsWith('/')
  },
  {
    name: 'products',
    app: () => System.import('products'),
    activeWhen: location => location.pathname.startsWith('/')
  }
]

Promise.all([
  System.import('pubsub-js'),
  System.import('snackbar')
]).then(() => {
  apps.forEach(app =>  registerApplication(app) );
  start();
});