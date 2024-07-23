import useAxios from './index.jsx';

export const indexUmkm = async (query) => {
    try {
        let params = {search: query};
        console.log(params);
        const response = await useAxios.get("/umkms", {
            params: params,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
          });
          console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.error('Error getting UMKM:', error);
        throw error;
    }
};

export const createUmkm = async (data) => {
    try {
        const response = await useAxios.post("/umkms", data, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
          });
          return response.data;
    } catch (error) {
        console.error('Error creating UMKM:', error);
        throw error;
    }
};

export const updateUmkm = async (id, data) => {
    try {
        console.log(data);
        const response = await useAxios.put(`/umkms/${id}`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
          });
          console.log(response.data);
          return response.data;
    } catch (error) {
        console.error('Error updating UMKM:', error);
        throw error;
    }
};

export const updateStatusUmkm = async (id, data) => {
    try {
        const response = await useAxios.put(`/umkms/status/${id}`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
          });
          return response.data;
    } catch (error) {
        console.error('Error updating UMKM:', error);
        throw error;
    }
};


export const deleteUmkm = async (id) => {
    try {
        const response = await useAxios.delete(`/umkms/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
          });
          return response.data;
    } catch (error) {
        console.error('Error deleting UMKM:', error);
        throw error;
    }
};
