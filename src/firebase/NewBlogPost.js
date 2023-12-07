import { getDatabase, ref, set, push } from 'firebase/database';
import { FirebaseApp } from './FirebaseInitializer';

export async function NewBlogPost(category, title, description, image) {

    try {

        const database = getDatabase(FirebaseApp);
        const basePath = `blog_posts/category/${category}`;
        const postsRef = ref(database, basePath);
        const newPostId = push(postsRef).key;
        const newPostRef = ref(database, `${basePath}/${newPostId}`);
        const postData = { id: newPostId, title: title ?? null, description: description ?? null, image: image ?? null, date: Date.now() };

        await set(newPostRef, postData);

        return postData;

    } catch (error) {
        console.error('Erro ao postar no blog:', error);
        return null;
    }

}
