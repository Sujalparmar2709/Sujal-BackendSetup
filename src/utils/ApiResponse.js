class ApiResponse {
    constructor(success, data, message = "success") {
        this.statusCode = 200;
        this.data = data
        this.message = message
        this.success = statusCode < 400;
    }
}