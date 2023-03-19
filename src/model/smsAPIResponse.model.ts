export interface responseData {
    status:       string;
    message:      string;
    message_id:   string;
    cost:         number;
    currency:     string;
    gateway_used: string;
}

export interface SMSAPIResponse {
    data: responseData;
}