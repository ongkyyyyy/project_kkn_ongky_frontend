import useAxios from './index.jsx';

export const login = async (data) => {
    try {
        const response = await useAxios.post("/login", data, {
            headers: {
                "Content-Type": "application/json",
            },
          });

          if (response.data && response.data.access_token) {
                localStorage.setItem('token', response.data.access_token);
            }

          return response.data;
    } catch (error) {
        console.error('Error login:', error);
        throw error;
    }
};

export const logout = async (data) => {
    try {
        const response = await useAxios.post("/logout", data, {
            headers: {
                "Content-Type": "application/json",
            },
          });
          return response.data;
    } catch (error) {
        console.error('Error logout:', error);
        throw error;
    }
};