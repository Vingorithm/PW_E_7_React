import { apiClient } from "../api/apiClient";
import { ENDPOINTS } from "../api/endpoints";

export const CreateBid = (data) => {
    // if (!auction_id || !bid_price || !user_id) {
    //     throw new Error("Invalid input: auction_id, bid_price, and user_id are required.");
    // }

    return apiClient.post(ENDPOINTS.CREATE_BID, data);
};
