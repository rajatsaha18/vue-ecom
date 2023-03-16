import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/my-cart',
    name: 'my-cart',
    component: () => import(/* webpackChunkName: "my-cart" */ '../views/MyCartView.vue')
  },
  {
    path: '/men-fashion',
    name: 'men-fashion',
   
    component: () => import(/* webpackChunkName: "men-fashion" */ '../views/CategoryView.vue')
  },
  {
    path: '/women-fashion',
    name: 'women-fashion',
   
    component: () => import(/* webpackChunkName: "women-fashion" */ '../views/WomenFashionView.vue')
  },
  {
    path: '/electronics',
    name: 'electronics',
   
    component: () => import(/* webpackChunkName: "electronics" */ '../views/ElectronicsView.vue')
  },
  {
    path: '/home-products',
    name: 'home-products',
   
    component: () => import(/* webpackChunkName: "home-products" */ '../views/HomeProductsView.vue')
  },
  {
    path: '/account',
    name: 'account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "account" */ '../views/AccountView.vue')
  },
  {
    path: '/product-detail',
    name: 'product-detail',
   
    component: () => import(/* webpackChunkName: "product-detail" */ '../views/ProductDetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
