import api from '@/services/api';

class GetAllPosts {
    execute = async () => {
        const posts = await api().get('posts/')
        return posts.data;
    }
}

export { GetAllPosts }