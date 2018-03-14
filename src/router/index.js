import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/view/landing';
import FormPage from'@/view/form';
import ListPage from '@/view/list';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/form',
      name: 'FormPage',
      component: FormPage
    },
    {
      path: '/list',
      name: 'ListPage',
      component: ListPage
    }
  ],
  linkActiveClass: 'active',
  mode: 'history',
})
