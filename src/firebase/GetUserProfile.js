import { getDatabase, ref, set, get } from 'firebase/database';
import { FirebaseApp } from './FirebaseInitializer';

export async function GetUserProfile(user, newsletter, firstName, lastName) {

    try {

        const { uid, email } = user;
        const database = getDatabase(FirebaseApp);
        const basePath = `users/${uid}/profile`;
        const profileRef = ref(database, basePath);

        const snapshot = await get(profileRef);

        if (!snapshot.exists()) {
            const configData = { newsletter: newsletter ?? null, first_name: firstName ?? null, last_name: lastName ?? null, picture: null, rank: 'Membro', id: uid ?? null, email: email ?? null };
            await set(profileRef, configData);
            return configData;
        } else {
            return snapshot.val();
        }

    } catch (error) {
        console.error('Erro ao gerar/buscar perfil:', error);
        return null;
    }

}
