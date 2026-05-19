export class KhaltiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "KhaltiError";
    }
}
