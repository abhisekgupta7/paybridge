import { NextResponse } from "next/server"
import { Khalti } from "../../../lib/khalti"
export async function POST() {
  const payment = await Khalti.initiate({
    return_url: "http://localhost:3000/success",
    website_url: "http://localhost:3000",
    amount: 1000,
    purchase_order_id: "ORDER-1",
    purchase_order_name: "Test Product",
  })
  console.log("INITIATE RESPONSE:", payment)

  return NextResponse.json(payment)
}