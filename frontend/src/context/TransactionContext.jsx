import React, { createContext, useReducer, useContext } from "react";

const SET_ACCOUNTS = "SET_ACCOUNTS";
const ADD_ACCOUNT = "ADD_ACCOUNT";
const SET_TRANSACTIONS = "SET_TRANSACTIONS";
const ADD_TRANSACTION = "ADD_TRANSACTION";

const initialState = {
  accounts: [],
  transactions: [],
};

const accountTransactionReducer = (state, action) => {
  switch (action.type) {
    case SET_ACCOUNTS:
      return { ...state, accounts: action.payload };
    case ADD_ACCOUNT:
      return { ...state, accounts: [...state.accounts, action.payload] };
    case SET_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

const AccountTransactionContext = createContext();

export const AccountTransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountTransactionReducer, initialState);

  return (
    <AccountTransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </AccountTransactionContext.Provider>
  );
};

export const useAccountTransactionContext = () => {
  return useContext(AccountTransactionContext);
};

export const setAccounts = (accounts) => ({
  type: SET_ACCOUNTS,
  payload: accounts,
});

export const addAccount = (account) => ({
  type: ADD_ACCOUNT,
  payload: account,
});

export const setTransactions = (transactions) => ({
  type: SET_TRANSACTIONS,
  payload: transactions,
});

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});
