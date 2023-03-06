import { NextPage } from "next";
import React from "react";


const TransactionHomePage: NextPage = () => {
  return (

    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">Transaction</h1>
        </div>
      </div>
    </div>

  );
};

export default TransactionHomePage;