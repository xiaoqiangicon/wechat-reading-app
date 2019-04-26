import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = _ => import('@/views/Home');

const routers = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    }
  ]
});

export default routers;
