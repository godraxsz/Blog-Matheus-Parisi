import { getDatabase, ref, get } from 'firebase/database';
import { FirebaseApp } from './FirebaseInitializer';

export async function GetBlogPosts() {

    try {

        const database = getDatabase(FirebaseApp);
        const basePath = `blog_posts/category`;
        const postsRef = ref(database, basePath);

        const snapshot = await get(postsRef);

        if (!snapshot.exists()) return null;

        return snapshot.val();

    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return null;
    }

}
