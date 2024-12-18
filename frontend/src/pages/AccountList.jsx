import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAccounts } from "../apis/account";
import { setAccounts, useAccountContext } from "../context/AccountContext";

const AccountList = () => {
  // const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();

  const { state, dispatch } = useAccountContext();
  const { accounts } = state;

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await getAccounts();
      // setAccounts(response);
      dispatch(setAccounts(response));
    };

    fetchAccounts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">
        Account List
      </h1>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              #
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Account
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Owner
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Balance
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {accounts.map((account, index) => (
            <tr key={account.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800">{index + 1}</td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {account.account_no}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {account.owner}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {account.balance}
              </td>
              <td className="px-4 py-2 text-sm space-x-2">
                <button
                  onClick={() =>
                    navigate(`/make-ofp?from=${account.account_no}`)
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Make an OFP
                </button>
                <button
                  onClick={() =>
                    navigate(`/accounts/${account.account_no}/transactions`)
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  View Transactions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;
