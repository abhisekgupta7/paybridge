import { KHALTI_BASE_URL_DEV } from "./constants";
import { KhaltiError } from "./errors";
import { verifyResponse } from "./types";
import { buildHeader } from "./utils/build-header";

export async function verifyPayment(secretKey: string, pidx: string) {
  const response = await fetch(`${KHALTI_BASE_URL_DEV}/epayment/lookup/`, {
    method: "POST",
    headers: buildHeader(secretKey),
    body: JSON.stringify({
      pidx,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new KhaltiError(data?.detail ?? "Verification failed");
  }

  if (data?.detail) {
    throw new KhaltiError(data.detail);
  }

  return data as verifyResponse;
}
