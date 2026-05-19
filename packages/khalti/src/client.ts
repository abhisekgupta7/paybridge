import { initiatePayment } from "./initiate"
import { verifyPayment } from "./verify"
import {initiatePayload, initiateResponse} from "./types"

export class khalti{

    private secretKey:string
    constructor(config:{secretKey:string})
    {
        this.secretKey = config.secretKey
    }

    async initiate(Payload: initiatePayload) {
        return await initiatePayment(this.secretKey, Payload)
    }

    async verify(verifyPayload:initiateResponse) {
        return await verifyPayment(this.secretKey, verifyPayload.pidx)
    }
}
