import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle";
import { nextCookies } from "better-auth/next-js";
import { organization } from "better-auth/plugins";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),

  emailAndPassword: {
    enabled: true,
  },

  plugins: [
    organization({
      allowUserToCreateOrganization: true,
      organizationLimit: 1, // one org per user, per your requirement
      creatorRole: "owner",
    }),
    nextCookies(),
  ],
});
