import { createAuthClient } from "better-auth/react"
import { organizationClient } from "better-auth/client/plugins"
import { ENV_CONFIG } from "./config"

export const authClient = createAuthClient({
    baseURL: ENV_CONFIG.BETTER_AUTH_URL,

    plugins: [
        organizationClient() 
    ]
})