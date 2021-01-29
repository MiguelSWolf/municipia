import Vue from 'vue';
import VueRouter from 'vue-router';
import UserBase from './views/UserBase';
import UserList from './views/UserList';
import UserDetails from './views/UserDetails';

Vue.use(VueRouter)

const routes = [
    { path: '/utilizadores', component: UserBase, children: [    
        { path: '/', name: 'UserList', component: UserList },
        { path: ':id', name: 'UserDetails', props: true, component: UserDetails },
    ] },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
