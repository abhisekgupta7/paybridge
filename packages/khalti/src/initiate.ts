import { KHALTI_BASE_URL_DEV } from "./constants";
import { initiatePayload, initiateResponse } from "./types";
import { buildHeader } from "./utils/build-header";
export async function initiatePayment(
  secretKey: string,
  Payload: initiatePayload,
) {
  const response = await fetch(`${KHALTI_BASE_URL_DEV}/epayment/initiate/`, {
    method: "POST",
    headers: buildHeader(secretKey),
    body: JSON.stringify(Payload),
  });
  return (await response.json()) as initiateResponse;
}
