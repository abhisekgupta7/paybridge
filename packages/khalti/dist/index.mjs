// src/constants.ts
var KHALTI_BASE_URL_DEV = "https://dev.khalti.com/api/v2";

// src/utils/build-heasder.ts
function buildHeader(secretKey) {
  return {
    "Authorization": `Key ${secretKey}`,
    "Content-Type": "application/json"
  };
}

// src/initiate.ts
async function initiatePayment(secretKey, Payload) {
  const response = await fetch(
    `${KHALTI_BASE_URL_DEV}/epayment/initiate/`,
    {
      method: "POST",
      headers: buildHeader(secretKey),
      body: JSON.stringify(Payload)
    }
  );
  return await response.json();
}

// src/verify.ts
async function verifyPayment(secretKey, pidx) {
  const response = await fetch(`${KHALTI_BASE_URL_DEV}/epayment/lookup/`, {
    method: "POST",
    headers: buildHeader(secretKey),
    body: JSON.stringify({
      pidx
    })
  });
  return await response.json();
}

// src/client.ts
var khalti = class {
  constructor(config) {
    this.secretKey = config.secretKey;
  }
  async initiate(Payload) {
    return await initiatePayment(this.secretKey, Payload);
  }
  async verify(verifyPayload) {
    return await verifyPayment(this.secretKey, verifyPayload.pidx);
  }
};

// src/errors.ts
var KhaltiError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "KhaltiError";
  }
};
export {
  KhaltiError,
  khalti
};
