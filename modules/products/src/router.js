import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductBase from './views/ProductBase';
import ProductList from './views/ProductList';
import ProductDetails from './views/ProductDetails';

Vue.use(VueRouter)

const routes = [
    { path: '/produtos', component: ProductBase, children: [    
        { path: '/', name: 'ProductList', component: ProductList },
        { path: ':id', name: 'ProductDetails', props: true, component: ProductDetails },
    ] },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
