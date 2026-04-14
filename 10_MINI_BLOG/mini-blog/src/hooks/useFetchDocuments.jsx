import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true); // 🔒 evita setState após desmontagem

  useEffect(() => {
    isMounted.current = true;
    setLoading(true);
    setError(null); // 🔄 limpa erros anteriores a cada nova query

    const collectionRef = collection(db, docCollection);

    let q;

    // ✅ cobre tanto null quanto string vazia
    if (search && search.trim() !== "") {
      q = query(
        collectionRef,
        where("tags", "array-contains", search.trim()),
        orderBy("createdAt", "desc")
      );
    } else if (uid) {
      q = query(
        collectionRef,
        where("uid", "==", uid),
        orderBy("createdAt", "desc")
      );
    } else {
      q = query(collectionRef, orderBy("createdAt", "desc"));
    }

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        if (!isMounted.current) return; // 🔒 componente desmontado, ignora
        setDocuments(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setLoading(false);
      },
      (err) => {
        if (!isMounted.current) return; // 🔒 componente desmontado, ignora
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => {
      isMounted.current = false; // 🔒 marca como desmontado
      unsubscribe(); // 🔥 cancela listener do Firestore
    };
  }, [docCollection, search, uid]);

  return { documents, loading, error };
};