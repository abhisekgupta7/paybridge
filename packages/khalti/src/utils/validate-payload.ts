export function validateAmount(amount: number) {
    if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
        throw new Error("Amount must be a positive number");
    }
    return amount * 100; // Khalti expects the amount in paisa, so we multiply by 100
}

