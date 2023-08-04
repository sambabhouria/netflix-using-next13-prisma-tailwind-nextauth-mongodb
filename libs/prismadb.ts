import { PrismaClient } from '@prisma/client'

// this is for awoid nextjs hot reload error : global variable is not affected by hot reload
// hot reload ==> on every code change we rerun the code
const client = global.prismadb || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prismadb = client

export default client
