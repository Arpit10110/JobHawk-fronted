// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth"

// Force Node.js runtime - this is the key fix
export const runtime = 'nodejs'

export const { GET, POST } = handlers
