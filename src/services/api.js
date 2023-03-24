import axios from 'axios';

const api = () => {
    const axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
    });

    return axiosInstance;
};

export default api;
