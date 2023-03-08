import { NextPage } from "next";
import Link from "next/link";
import Activity from "tauri/components/layouts/Activity";
import Layout from "../components/layouts/Layout";
import { useState } from 'react';
import router from "next/router";



const BuyPage: NextPage = () => {
  const price = 0.385086;
  const [ftm, setFTM] = useState({})


  const handleChange = (val: any) => {
    setFTM(price*val)
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    localStorage.setItem("balance", ftm as string);
    router.push("/home");

  }

  return (
    <Layout>
      <div className="container">
        <div className="grid place-content-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="flex min-h-full flex-col justify-center pb-12 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md pt-14">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Buy crypto to your wallet
                </h2>
              </div>

              <div className="sm:mx-auto sm:w-full sm:max-w-md w-screen px-4 mt-5">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <form className="space-y-6 text-black" action="#" method="POST">
                    <div>
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        You pay
                      </label>
                      <div className="mt-2 flex text-black flex-row gap-2 content-center items-center">
                        <input
                          name="amount"
                          type="number"
                          autoComplete="amount"
                          required
                          className="block w-[60%] rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={e => { handleChange(e.currentTarget.value); }} 
                        />
                        <select
                          name="currency"
                          className="mt-2 block w-[40%] rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue="USD"
                        >
                          <option value="usd">USD</option>
                          <option value="usd">GBP</option>
                        </select>
                      </div>
                    </div>

                    <Activity />

                    <div>
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        You receive (estimate)
                      </label>
                      <div className="relative mt-2 text-black rounded-md shadow-sm">
                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          className="block w-full rounded-md border-0 py-1.5 pl-1 pr-12  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.00"
                          aria-describedby="amount-currency"
                          value={ftm}
                         readOnly
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <span className="sm:text-sm" id="amount-currency">
                            FTM
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href="home">
                        <button
                          type="button"
                          className="w-full  justify-center rounded-md bg-gray-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Cancel
                        </button>
                      </Link>
                      <Link href='/home'>
                      <button
                        type="submit"
                        className="w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={handleSubmit}
                      >
                        Buy Now
                      </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuyPage;
