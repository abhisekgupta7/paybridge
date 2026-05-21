// src/constants.ts
var KHALTI_BASE_URL_DEV = "https://dev.khalti.com/api/v2";

// src/utils/build-header.ts
function buildHeader(secretKey) {
  return {
    Authorization: `key ${secretKey}`,
    "Content-Type": "application/json"
  };
}

// src/initiate.ts
async function initiatePayment(secretKey, Payload) {
  const response = await fetch(`${KHALTI_BASE_URL_DEV}/epayment/initiate/`, {
    method: "POST",
    headers: buildHeader(secretKey),
    body: JSON.stringify(Payload)
  });
  return await response.json();
}

// src/errors.ts
var KhaltiError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "KhaltiError";
  }
};

// src/verify.ts
async function verifyPayment(secretKey, pidx) {
  var _a;
  const response = await fetch(`${KHALTI_BASE_URL_DEV}/epayment/lookup/`, {
    method: "POST",
    headers: buildHeader(secretKey),
    body: JSON.stringify({
      pidx
    })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new KhaltiError((_a = data == null ? void 0 : data.detail) != null ? _a : "Verification failed");
  }
  if (data == null ? void 0 : data.detail) {
    throw new KhaltiError(data.detail);
  }
  return data;
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
export {
  KhaltiError,
  khalti
};
