"use server";

import { RESPONSE_MESSAGE } from "@/constant/message";
import { auth } from "@/lib/auth";
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
