import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import {useState, useEffect} from "react";
import { auth } from "../firebase/config";


export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const createUser = async (data) => {
        if(cancelled) {
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName
            });

            setLoading(false);
            return user;
        } catch (error) {       

            let systemErrorMessage;
            
            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado.";
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente novamente mais tarde.";
            }

            setError(systemErrorMessage);
            setLoading(false);
        }
    };

    const logout = () => {
        if (cancelled) {
            return;
        }
        
        signOut(auth);
    };

    const login = async (data) => {
        if (cancelled) {
            return;
        }

        setLoading(true);
        setError(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);
        } catch (error) {
            let systemErrorMessage;

            console.log(error.message); 

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado.";
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta.";
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente novamente mais tarde.";
            }

            setError(systemErrorMessage);
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        logout,
        login,
        error,
        loading
    };
};
