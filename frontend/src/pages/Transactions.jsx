import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getTransactionsByAccount } from "../apis/account";

const Transactions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactionsByAccount(id).then((response) => setTransactions(response));
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">
        Transactions
      </h1>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              #
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Sender
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Receiver
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Amount
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {transactions.map((transaction, index) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-800">{index + 1}</td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {transaction.from}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {transaction.to}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {transaction.amount.toLocaleString()}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {new Date(transaction.trans_time).toLocaleString("en-GB")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <button
          onClick={() => navigate("/accounts")}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Transactions;
