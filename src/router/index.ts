import { createRouter, createWebHistory } from 'vue-router'
import DataCleansing from '@/views/DataCleansing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DataCleansing,
    },
    {
      path: '/data-validation',
      name: 'data-validation',
      component: () => import('@/views/DataValidation.vue'),
    },
    {
      path: '/data-validation/error-report',
      name: 'data-validation-error-report',
      component: () => import('@/views/DataValidationErrorReport.vue'),
    },
  ],
})

export default router
