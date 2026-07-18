"use server";

import { RESPONSE_MESSAGE } from "@/constant/message";
import { db } from "@/db/drizzle";
import { auth } from "@/lib/auth";
import { errorResponse, successResponse } from "@/utils/action-response";
import { UI_ROUTES } from "@/utils/ui-routes";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { member, user } from "@/db/schema";
import { eq, inArray, not } from "drizzle-orm";

export const getCurrentUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(UI_ROUTES.SIGNIN);
  }

  const currentUser = await db.query.user.findFirst({
    where: eq(user.id, session.user.id),
  });

  if (!currentUser) {
    redirect(UI_ROUTES.SIGNIN);
  }

  return {
    ...session,
    currentUser,
  };
};

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

export const signUp = async (name: string, email: string, password: string) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return successResponse(RESPONSE_MESSAGE.SIGNUP_SUCCESS);
  } catch (error) {
    const e = error as Error;
    const message = e.message ?? RESPONSE_MESSAGE.SIGNUP_FAILED;
    return errorResponse(message, error);
  }
};

export const getUsers = async (organizationId: string) => {
  try {
    const members = await db.query.member.findMany({
      where: eq(member.organizationId, organizationId),
    });

    const users = await db.query.user.findMany({
      where: not(
        inArray(
          user.id,
          members.map((mem) => mem.userId),
        ),
      ),
    });
    return successResponse("", users);
  } catch (error) {
    console.log("Error : ", error);
    return [];
  }
};
