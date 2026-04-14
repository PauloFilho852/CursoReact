import { useReducer, useRef, useEffect, useCallback } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const deleteReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "DELETED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useDeleteDocument = (docCollection) => {
  const [response, dispatch] = useReducer(deleteReducer, initialState);

  // useRef não causa re-render, ideal para controle de memory leak
  const isCancelled = useRef(false);

  const safeDispatch = useCallback((action) => {
    if (!isCancelled.current) {
      dispatch(action);
    }
  }, []);

  const deleteDocument = useCallback(
    async (id) => {
      safeDispatch({ type: "LOADING" });

      try {
        await deleteDoc(doc(db, docCollection, id));
        safeDispatch({ type: "DELETED_DOC" });
      } catch (error) {
        safeDispatch({ type: "ERROR", payload: error.message });
      }
    },
    [docCollection, safeDispatch]
  );

  useEffect(() => {
    isCancelled.current = false;

    return () => {
      isCancelled.current = true;
    };
  }, []);

  return { deleteDocument, response };
};
