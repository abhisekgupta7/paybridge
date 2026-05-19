interface initiatePayload {
    amount: number;
    return_url: string;
    website_url: string;
    purchase_order_id: string;
    purchase_order_name: string;
}
interface initiateResponse {
    pidx: string;
    payment_url: string;
    expires_at: string;
    expires_in: number;
}

declare class khalti {
    private secretKey;
    constructor(config: {
        secretKey: string;
    });
    initiate(Payload: initiatePayload): Promise<initiateResponse>;
    verify(verifyPayload: initiateResponse): Promise<any>;
}

declare class KhaltiError extends Error {
    constructor(message: string);
}

export { KhaltiError, type initiatePayload, type initiateResponse, khalti };
