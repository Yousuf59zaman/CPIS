import { createRouter, createWebHistory } from 'vue-router'
import { authMiddleware } from '@/middleware/auth'
import DataCleansing from '@/pages/data-validation/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/data-validation',
      name: 'data-validation',
      component: DataCleansing,
      meta: { layout: 'default' },
    },
    {
      path: '/data-validation/data-cleansing-upload',
      name: 'data-cleansing-upload',
      component: () => import('@/pages/data-validation/data-cleansing-upload.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/data-validation/error-report',
      name: 'data-validation-error-report',
      component: () => import('@/pages/data-validation/error-report.vue'),
      meta: { layout: 'default' },
    },
  ],
})

router.beforeEach(authMiddleware)

export default router
