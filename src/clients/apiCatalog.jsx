import useAxios from ".";

export const GetAllCatalog = async () => {
    try {
        const response = await useAxios.get("/car-catalogs", {
            headers: {
                "Content-Type": "application/json", Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
        return response.data.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const CreateCarCatalog = async (data) => {
    try {
        const response = await useAxios.post("/car-catalogs", data, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const ShowCarCatalog = async (values) => {
    try {
        const response = await useAxios.get(`/car-catalogs/${values.id}`, values, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const UpdateCarCatalog = async (values) => {
    try {
        const response = await useAxios.put(`/car-catalogs/${values.id}`, values, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const DeleteCarCatalog = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
        const response = await useAxios.delete(`/car-catalogs/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};