import React, { createContext, useContext, useState, useEffect, useCallback  } from 'react';
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth';
import { FirebaseApp } from './FirebaseInitializer';
import { GetUserProfile } from './GetUserProfile';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);
    const [profileData, setProfileData] = useState(null);

    const auth = getAuth(FirebaseApp);

    const checkAuthentication = useCallback(async () => {
        return new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe();

                if (user) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    }, [auth]);

    useEffect(() => {
        checkAuthentication().then(async (isAuthenticated) => {
            if (isAuthenticated) {
                try {
                    const user = auth?.currentUser ? auth?.currentUser : null;
                    const data = user ? await GetUserProfile(user) : null;

                    if (data) {
                        setAuthenticated(isAuthenticated);
                        setProfileData(data);
                    }
                } catch (error) {
                    console.error('Erro ao verificar/armazenar perfil:', error);
                }
            }
        });
    }, [auth, checkAuthentication]);

    const handleLogout = async () => {
        await signOut(auth).then(() => {
            setAuthenticated(false);
            setProfileData(null); // Limpar os dados do perfil ao fazer logout
        })
    };

    return (
        <AuthContext.Provider value={{ auth, authenticated, profileData, setAuthenticated, setProfileData, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuthCheck = () => {
    return useContext(AuthContext);
};
