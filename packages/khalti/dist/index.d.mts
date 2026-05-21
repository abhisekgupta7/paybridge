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
interface verifyResponse {
    pidx: string;
    total_amount: number;
    status: "Completed" | "Pending" | "Initiated" | "Refunded" | "Expired" | "User canceled" | "Partially Refunded";
    transaction_id: string | null;
    fee: number;
    refunded: boolean;
}

declare class khalti {
    private secretKey;
    constructor(config: {
        secretKey: string;
    });
    initiate(Payload: initiatePayload): Promise<initiateResponse>;
    verify(verifyPayload: {
        pidx: string;
    }): Promise<verifyResponse>;
}

declare class KhaltiError extends Error {
    constructor(message: string);
}

export { KhaltiError, type initiatePayload, type initiateResponse, khalti, type verifyResponse };
