import { khalti } from "@paybridge/khalti"

export const Khalti = new khalti({
  secretKey: process.env.KHALTI_SECRET_KEY!,
})