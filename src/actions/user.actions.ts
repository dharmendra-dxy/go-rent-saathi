"use server";

import { headers } from "next/headers";
import { eq } from "drizzle-orm";
import { RESPONSE_MESSAGE } from "@/constant/message";
import { auth } from "@/lib/auth";
import { db } from "@/db/drizzle";
import { organization } from "@/db/schema/auth.schema";
import { slugify } from "@/utils/slugify";
import { errorResponse, successResponse } from "@/utils/action-response";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return successResponse(RESPONSE_MESSAGE.LOGIN_SUCCESS);
  } catch (error) {
    const e = error as Error;
    const message = e.message ?? RESPONSE_MESSAGE.LOGIN_FAILED;
    return errorResponse(message, error);
  }
};

export const signUp = async (
  name: string,
  email: string,
  password: string,
  organizationName: string,
) => {
  try {
    // 1. create the user
    const signUpRes = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    console.log("signUpRes: ", signUpRes);

    if (!signUpRes?.user) {
      return errorResponse(RESPONSE_MESSAGE.SIGNUP_FAILED);
    }

    // 2. resolve a unique slug for the organization
    const baseSlug = slugify(organizationName);
    let slug = baseSlug;
    let suffix = 1;

    console.log("baseSlug: ",baseSlug);

    while (
      await db.query.organization.findFirst({
        where: eq(organization.slug, slug),
      })
    ) {
      slug = `${baseSlug}-${suffix++}`;
    }

    // 3. create the organization owned by the new user
    try {
      const org = await auth.api.createOrganization({
        body: {
          name: organizationName,
          slug,
          userId: signUpRes.user.id,
        },
        headers: await headers(),
      });

      console.log("ORG =====> ", org);

      return successResponse(RESPONSE_MESSAGE.SIGNUP_SUCCESS, { slug: org?.slug });
    } catch (orgError) {
      // user was created but org creation failed — surface this distinctly
      // so the UI/logs can tell the two failure modes apart
      const e = orgError as Error;
      return errorResponse(
        e.message ?? RESPONSE_MESSAGE.ORG_CREATE_FAILED,
        orgError,
      );
    }
  } catch (error) {
    const e = error as Error;
    const message = e.message ?? RESPONSE_MESSAGE.SIGNUP_FAILED;
    return errorResponse(message, error);
  }
};