import { createAuthClient } from "better-auth/react"
import { ENV_CONFIG } from "./config"

export const authClient = createAuthClient({
    baseURL: ENV_CONFIG.BETTER_AUTH_URL
})