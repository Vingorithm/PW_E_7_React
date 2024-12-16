import axios from "axios";

export const BASE_URL = "https://pwe7laravel-production.up.railway.app/"

// export const getThumbnail = (thumbnail) => {
//     return `${BASE_URL}/storage/contents/${thumbnail}`;
// }

const useAxios = axios.create({
    baseURL: `${BASE_URL}/api`,
});

export default useAxios;