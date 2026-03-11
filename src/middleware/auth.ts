import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

/**
 * Authentication middleware.
 * Extend this guard to verify user session before protected routes.
 */
export function authMiddleware(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  // TODO: check user store / token and redirect to login if unauthenticated
  next()
}
