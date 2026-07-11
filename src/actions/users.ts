"use server";

import { auth } from "@/lib/auth";

export const signIn = async () => {
  console.log("I am here...")
  await auth.api.signInEmail({
    body:{
      email: "test@gmail.com",
      password: "1234",
    }
  })
}

export const signUp = async () => {
  await auth.api.signUpEmail({
    body:{
      name: "test user",
      email: "test@gmail.com",
      password: "12345678",
    }
  })
}

