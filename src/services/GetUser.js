import api from '@/services/api';

class GetUser {
    execute = async (id) => {
        const user = await api().get(`users/${id}`)
        return user.data;
    }
}

export { GetUser }