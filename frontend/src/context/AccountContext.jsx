import React, { createContext, useReducer, useContext } from "react";

const SET_ACCOUNTS = "SET_ACCOUNTS";

const initialState = {
  accounts: [],
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case SET_ACCOUNTS:
      return { ...state, accounts: action.payload };
    default:
      return state;
  }
};

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  return (
    <AccountContext.Provider value={{ state, dispatch }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => {
  return useContext(AccountContext);
};

export const setAccounts = (accounts) => ({
  type: SET_ACCOUNTS,
  payload: accounts,
});
