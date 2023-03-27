import api from '@/services/api';

class GetAllUsers {
    execute = async () => {
        const users = await api().get('users/')
        return users.data;
    }
}

export { GetAllUsers }