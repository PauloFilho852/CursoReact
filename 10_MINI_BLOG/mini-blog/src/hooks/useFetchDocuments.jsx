import { useState, useEffect } from "react";
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

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

useEffect(() => {
  if (cancelled) {
    return;
  }  

  const collectionRef = collection(db, docCollection);

  let q;

  if (search) {
    q = query(
      collectionRef,
      where("tags", "array-contains", search),
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

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    setDocuments(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  });

  setLoading(false);

  return () => unsubscribe();

}, [docCollection, search, uid]);

  console.log(documents);

  useEffect(() => {
    console.log("cleanup");
    return () => setCancelled(true);
  }, []);

  return { documents, loading, error };
};
