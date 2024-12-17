import { apiClient } from "../api/apiClient";
import { ENDPOINTS } from "../api/endpoints";

export const CreateBid = () =>
    apiClient.post(ENDPOINTS.CREATE_BID);