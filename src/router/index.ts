import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login' // Redirige a la página de login al inicio
  },
  {
    path: '/login', 
    component: () => import('@/views/LOGIN.vue')  
  },
  {
    path: '/register', 
    component: () => import('@/views/REGISTER.vue')  
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/Models'  
      },
      {
        path: 'Models',  
        component: () => import('@/views/MODELSEARCH.vue')
      },
      {
        path: 'Publish',  
        component: () => import('@/views/PUBLISH.vue')
      },
      {
        path: 'Castings',  
        component: () => import('@/views/CASTINGSEARCH.vue')
      },
      {
        path: 'Notifications',  
        component: () => import('@/views/NOTIFICATIONS.vue')
      },
      {
        path: 'Profile',  
        component: () => import('@/views/PROFILE.vue')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
