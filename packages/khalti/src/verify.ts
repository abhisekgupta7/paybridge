import { KHALTI_BASE_URL_DEV } from "./constants";
import { buildHeader } from "./utils/build-heasder";

export async function verifyPayment(secretKey: string, pidx: string) {
  const response = await fetch(`${KHALTI_BASE_URL_DEV}/epayment/lookup/`, {
    method: "POST",
    headers: buildHeader(secretKey),
    body: JSON.stringify({
      pidx,
    }),
  });
  return await response.json();
}
