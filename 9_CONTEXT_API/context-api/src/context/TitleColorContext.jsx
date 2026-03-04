import { useReducer, createContext } from "react";

export const TitleColorContext = createContext();

const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "SET_COLOR":
        if (state.color === action.payload) {
            return { ...state, color: "black" }; // Se a cor já for a mesma, não atualiza o estado
        }
        else {               
      return { ...state, color: "grey" };
        }
    default:
      return state;
  }
};

export const TitleColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "grey" });
    
  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
