export const ENDPOINTS = {
    GET_ALL_CAR_CATALOGS: "/car-catalogs",
    CREATE_CAR_CATALOGS: "/car-catalogs",
    SHOW_CAR_CATALOG: (id) => `/car-catalogs/${id}`,
    UPDATE_CAR_CATALOG: (id) => `/car-catalogs/${id}`,
    DELETE_CAR_CATALOG: (id) => `/car-catalogs/${id}`,

    REGISTER: "/register",
    LOGIN: "/login",
    FORGOT_PASSWORD: "/forgot-password",
    LOGOUT: "/logout",
};
