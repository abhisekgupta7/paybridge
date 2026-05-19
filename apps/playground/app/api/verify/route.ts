import { NextRequest, NextResponse } from "next/server"
import { Khalti } from "../../../lib/khalti"
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    console.log("BODY:", body)

    const data = await Khalti.verify(
      body.pidx
    )

    console.log("KHALTI RESPONSE:", data)
    console.log(process.env.KHALTI_SECRET_KEY)

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        message: "Verification failed",
      },
      {
        status: 500,
      }
    )
  }
}