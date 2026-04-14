import { useReducer, useEffect, useRef, useCallback } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: false,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERTED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useInsertDocument = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const safeDispatch = useCallback((action) => {
    if (isMounted.current) {
      dispatch(action);
    }
  }, []);

  const insertDocument = useCallback(
    async (document) => {
      safeDispatch({ type: "LOADING" });

      try {
        const newDocument = { ...document, createdAt: Timestamp.now() };
        const insertedDocument = await addDoc(
          collection(db, docCollection),
          newDocument
        );

        safeDispatch({ type: "INSERTED_DOC", payload: insertedDocument });
      } catch (error) {
        safeDispatch({ type: "ERROR", payload: error.message });
      }
    },
    [docCollection, safeDispatch]
  );

  return { insertDocument, response };
};
