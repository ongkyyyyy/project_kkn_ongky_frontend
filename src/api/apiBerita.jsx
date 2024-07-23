import useAxios from './index.jsx';

export const indexBeritas = async (query) => {
    try {
        let params = {search: query};
        console.log(params);
        const response = await useAxios.get("/beritas", {
            params: params,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
          });
          console.log(response.data);
        return response.data.data;
    } catch (error) {
        console.error('Error getting berita:', error);
        throw error;
    }
};

export const createBeritas = async (data) => {
    console.log('Data to be sent:', data);  
    try {
        const response = await useAxios.post("/beritas", data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating berita:', error);
        throw error;
    }
};


export const updateBeritas = async (id, data) => {
    try {
        const response = await useAxios.put(`/beritas/${id}`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
          });
          return response.data;
    } catch (error) {
        console.error('Error updating berita:', error);
        throw error;
    }
};

export const deleteBeritas = async (id) => {
    try {
        const response = await useAxios.delete(`/beritas/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
          });
          return response.data;
    } catch (error) {
        console.error('Error deleting berita:', error);
        throw error;
    }
};
