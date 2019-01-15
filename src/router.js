import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Classify from './components/tabbar/Classify.vue'
import Rank from './components/tabbar/Rank.vue'
import Bookrack from './components/tabbar/Bookrack.vue'
import Book from './components/book/Book.vue'
import Read from './components/read/Read.vue'
import Mvlu from './components/read/Mvlu.vue'
import List from './components/read/List.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/bookrack',
      name: 'bookrack',
      component: Bookrack
    },
    {
      path: '/book:id',
      name: 'book',
      component: Book
    },
    {
      path: '/read:id',
      name: 'read',
      component: Read
    },
    {
      path: '/mvlu:id',
      name: 'mvlu',
      component: Mvlu
    },
    {
      path: '/list:id',
      name: 'list',
      component: List
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
  linkActiveClass: 'gaoliang'
})
