"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  KhaltiError: () => KhaltiError,
  khalti: () => khalti
});
module.exports = __toCommonJS(index_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KhaltiError,
  khalti
});
