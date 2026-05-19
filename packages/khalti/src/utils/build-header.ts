export function buildHeader(secretKey: string) {
    return {
        "Authorization": `Key ${secretKey}`,
        "Content-Type": "application/json"
    }
}