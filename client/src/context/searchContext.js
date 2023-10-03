/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useReducer } from "react"

const initialState = {
    name: undefined,
}

export const searchContext = createContext(initialState);

const searchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return initialState;
        default:
            return state;
    }
};

export const searchContextProvider = ({children}) => {
   const [state, dispatch] = useReducer(searchReducer, initialState);

   return (
    <searchContext.Provider
      value={{
        name: state.name,
        dispatch,
      }}
    >
      {children}
    </searchContext.Provider>
   )
}