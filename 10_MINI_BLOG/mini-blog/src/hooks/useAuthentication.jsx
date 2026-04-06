import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth";
import { useState, useEffect, useRef } from "react";
import { auth } from "../firebase/config";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const cancelledRef = useRef(false);

  // função helper
  const checkIfIsCancelled = () => cancelledRef.current;

  const createUser = async (data) => {
    if (checkIfIsCancelled()) return;

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

      if (checkIfIsCancelled()) return;

      setLoading(false);
      return user;
    } catch (error) {
      if (checkIfIsCancelled()) return;

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage =
          "Ocorreu um erro, por favor tente novamente mais tarde.";
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  const logout = () => {
    if (checkIfIsCancelled()) return;
    signOut(auth);
  };

  const login = async (data) => {
    if (checkIfIsCancelled()) return;

    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      if (checkIfIsCancelled()) return;

      setLoading(false);
    } catch (error) {
      if (checkIfIsCancelled()) return;

      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado.";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta.";
      } else {
        systemErrorMessage =
          "Ocorreu um erro, por favor tente novamente mais tarde.";
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    cancelledRef.current = false;

    return () => {
      cancelledRef.current = true;
    };
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