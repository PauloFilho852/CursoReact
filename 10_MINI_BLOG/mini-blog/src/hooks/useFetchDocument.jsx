import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadDocument = async () => {
      setLoading(true);
      setError(null);

      try {
        const docRef = doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          throw new Error("Documento não encontrado.");
        }

        if (isMounted) {
          setDocument(docSnap.data());
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadDocument();

    return () => {
      isMounted = false;
    };
  }, [docCollection, id]);

  return { document, loading, error };
};
