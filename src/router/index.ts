import { createRouter, createWebHistory } from 'vue-router'
import { authMiddleware } from '@/middleware/auth'
import DataCleansing from '@/pages/data-validation/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/data-validation',
    },
    {
      path: '/data-validation',
      name: 'data-validation',
      component: DataCleansing,
      meta: { layout: 'default' },
    },
    {
      path: '/data-cleansing-upload',
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
    {
      path: '/data-validation/migration-template',
      name: 'data-validation-migration-template',
      component: () => import('@/pages/data-validation/migration-template.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/data-validation/finalize-claimant-data',
      name: 'data-validation-finalize-claimant-data',
      component: () => import('@/pages/data-validation/finalize-claimant-data.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/data-migration',
      name: 'data-migration',
      component: () => import('@/pages/data-migration/index.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/data-migration/migration-template',
      name: 'data-migration-template',
      component: () => import('@/pages/data-migration/migration-template.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/data-migration/migration-error-log',
      name: 'data-migration-error-log',
      component: () => import('@/pages/data-migration/migration-error-log.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/data-migration/migration-report',
      name: 'data-migration-report',
      component: () => import('@/pages/data-migration/migration-report.vue'),
      meta: { layout: 'default' },
    },
  ],
})

router.beforeEach(authMiddleware)

export default router
