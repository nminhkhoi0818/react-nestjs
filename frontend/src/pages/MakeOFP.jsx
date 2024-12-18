import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createTransaction } from "../apis/transaction";

const MakeOFP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromAccount = new URLSearchParams(location.search).get("from");

  const formik = useFormik({
    initialValues: {
      from: fromAccount || "",
      to: "",
      amount: "",
    },
    validationSchema: Yup.object({
      from: Yup.string().required("From account is required"),
      to: Yup.string().required("To account is required"),
      amount: Yup.number()
        .required("Amount is required")
        .positive("Amount must be a positive number")
        .min(1, "Amount must be greater than zero"),
    }),
    onSubmit: (values) => {
      createTransaction(values).then(() => navigate("/accounts"));
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Make an Order-for-Payment
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="from"
            className="block text-sm font-medium text-gray-700"
          >
            From Account
          </label>
          <input
            id="from"
            name="from"
            type="text"
            value={formik.values.from}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 p-2 border rounded-md"
            readOnly
          />
          {formik.touched.from && formik.errors.from ? (
            <div className="text-red-500 text-xs">{formik.errors.from}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="to"
            className="block text-sm font-medium text-gray-700"
          >
            To Account
          </label>
          <input
            id="to"
            name="to"
            type="text"
            value={formik.values.to}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 p-2 border rounded-md"
          />
          {formik.touched.to && formik.errors.to ? (
            <div className="text-red-500 text-xs">{formik.errors.to}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 p-2 border rounded-md"
          />
          {formik.touched.amount && formik.errors.amount ? (
            <div className="text-red-500 text-xs">{formik.errors.amount}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <button
        onClick={() => navigate("/accounts")}
        className="mt-4 w-full text-gray-700 border border-gray-300 p-2 rounded-md hover:bg-gray-200"
      >
        Back
      </button>
    </div>
  );
};

export default MakeOFP;
