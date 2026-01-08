// route-builder.ts neutralized for Next.js migration.
// Previously this dynamically built a Hono router from `src/app/api/**/route.js` files.
// Server routing is removed; export minimal placeholders and types useful to the
// rest of the codebase.

export const API_BASENAME = '/api';

export type RouteHandler = (req: unknown, params?: Record<string, unknown>) => Promise<unknown>;

export const api = null as unknown;

export default {};
