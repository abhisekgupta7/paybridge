export interface initiatePayload {
  amount: number;
  return_url: string;
  website_url: string;
  purchase_order_id: string;
  purchase_order_name: string;
}

export interface initiateResponse {
  pidx: string;
  payment_url: string;
  expires_at: string;
  expires_in: number;
}
