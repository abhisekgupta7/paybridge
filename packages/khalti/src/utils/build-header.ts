export function buildHeader(secretKey: string) {
  return {
    Authorization: `key ${secretKey}`,
    "Content-Type": "application/json",
  };
}
