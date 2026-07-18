export const UI_ROUTES = {
  BASE: "/",
  // auth:
  SIGNIN: "/signin",
  SINGUP: "/signup",

  // Public routes:

  // Broker routes:
  org: (slug: string) => ({
    DASHBOARD: `/${slug}/dashboard`,
    LISTING: `/${slug}/listing`,
  }),

  // Admin Routes:
};
