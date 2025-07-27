class ErrorHandler extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.statusCode = statusCode;
    }
}
export default ErrorHandler;
// sachin singh
