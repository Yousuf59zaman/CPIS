import { createRouter, createWebHistory } from 'vue-router'
import { authMiddleware } from '@/middleware/auth'
import DataCleansing from '@/pages/data-validation/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },

    // Auth routes
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/pages/auth/login.vue'),
      meta: { layout: 'auth' },
    },
    {
      path: '/auth/otp',
      name: 'otp',
      component: () => import('@/pages/auth/otp.vue'),
      meta: { layout: 'auth' },
    },
    {
      path: '/auth/reset-password',
      name: 'reset-password',
      component: () => import('@/pages/auth/reset-password.vue'),
      meta: { layout: 'auth' },
    },
    {
      path: '/auth/forgot-password',
      redirect: '/auth/reset-password',
    },

    // Dashboard
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/dashboard/index.vue'),
      meta: { layout: 'default' },
    },

    // Claims List
    {
      path: '/claims-list',
      name: 'claims-list',
      component: () => import('@/pages/claims-list/index.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id',
      name: 'claims-list-detail',
      component: () => import('@/pages/claims-list/detail.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/claim-intake',
      name: 'claim-intake',
      component: () => import('@/pages/claims-list/claim-intake.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/document-digitization',
      name: 'document-digitization',
      component: () => import('@/pages/claims-list/document-digitization.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/gis-property-validation',
      name: 'gis-property-validation',
      component: () => import('@/pages/claims-list/gis-property-validation.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/ocular-inspection',
      name: 'ocular-inspection',
      component: () => import('@/pages/claims-list/ocular-inspection.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/ocular-inspection-summary',
      name: 'ocular-inspection-summary',
      component: () => import('@/pages/claims-list/ocular-inspection-summary.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/inspection-review',
      name: 'inspection-review',
      component: () => import('@/pages/claims-list/inspection-review.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/legal-review',
      name: 'legal-review',
      component: () => import('@/pages/claims-list/legal-review.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/legal-review-detail',
      name: 'legal-review-detail',
      component: () => import('@/pages/claims-list/legal-review-detail.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/board-agenda',
      name: 'board-agenda',
      component: () => import('@/pages/claims-list/board-agenda.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/board-decision',
      name: 'board-decision',
      component: () => import('@/pages/claims-list/board-decision.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/decision-entry',
      name: 'decision-entry',
      component: () => import('@/pages/claims-list/decision-entry.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/claims-list/:id/disbursement-voucher',
      name: 'disbursement-voucher',
      component: () => import('@/pages/claims-list/disbursement-voucher.vue'),
      meta: { layout: 'default' },
    },

    // Task Inbox
    {
      path: '/task-inbox',
      name: 'task-inbox',
      component: () => import('@/pages/task-inbox/index.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/task-inbox/ser-report',
      name: 'ser-report',
      component: () => import('@/pages/task-inbox/ser-report.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/task-inbox/ser-review',
      name: 'ser-review',
      component: () => import('@/pages/task-inbox/ser-review.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/task-inbox/payment-authorisation',
      name: 'payment-authorisation',
      component: () => import('@/pages/task-inbox/payment-authorisation.vue'),
      meta: { layout: 'default' },
    },

    // Reports
    {
      path: '/reports',
      name: 'reports',
      component: () => import('@/pages/reports/index.vue'),
      meta: { layout: 'default' },
    },

    // Administration
    {
      path: '/administration',
      name: 'administration',
      component: () => import('@/pages/administration/index.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/administration/assignment-review',
      name: 'assignment-review',
      component: () => import('@/pages/administration/assignment-review.vue'),
      meta: { layout: 'default' },
    },
    {
      path: '/administration/user-management',
      name: 'user-management',
      component: () => import('@/pages/administration/user-management.vue'),
      meta: { layout: 'default' },
    },
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
