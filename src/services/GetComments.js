import api from '@/services/api';

class GetComments {
    execute = async (id) => {
        const comments = await api().get(`posts/${id}/comments`)
        return comments.data;
    }
}

export { GetComments }