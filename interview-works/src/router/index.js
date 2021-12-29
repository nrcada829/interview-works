import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Front/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views/Front/Index.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/Front/Products.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Front/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Backstage/Dashboard.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/Backstage/AdminProducts.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
