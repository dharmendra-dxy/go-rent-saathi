export const UI_ROUTES = {
  BASE: "/",

  // auth:
  SIGNIN: "/signin",
  SINGUP: "/signup",

  // Public routes:

  // Broker routes:
  DASHBOARD: "/dashboard",
  org: (slug: string) => ({
    DASHBOARD: `/${slug}/dashboard`,
    ORGANIZATION: `/organization/${slug}`,

    ORGA : `/${slug}/organization`,
  }),

  // Admin Routes:
};
