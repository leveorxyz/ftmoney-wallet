import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layouts/Layout";

const SendPage: NextPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="grid place-content-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="flex min-h-full flex-col justify-center pb-12 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md pt-14">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Send
                </h2>
              </div>

              <div className="sm:mx-auto sm:w-full sm:max-w-md w-screen px-4 mt-5">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What's the first name?
                      </label>
                      <div className="mt-2">
                        <input
                          name="firstName"
                          type="text"
                          autoComplete="firstName"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Type the cell phone number
                      </label>
                      <div className="mt-2">
                        <input
                          name="phone"
                          type="tel"
                          autoComplete="phone"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="asset"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Asset
                      </label>
                      <select
                        name="asset"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue="FTM"
                      >
                        <option value="ftm">FTM</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Amount
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          className="block w-full rounded-md border-0 py-1.5 pl-1 pr-12  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.00"
                          aria-describedby="amount-currency"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <span className="sm:text-sm" id="amount-currency">
                            FTM
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 block text-sm font-medium leading-6 text-gray-900">
                      Gas Amount (Estimated): 0.0000001 FTM
                    </p>

                    <div className="flex gap-3">
                      <Link href="home">
                        <button
                          type="button"
                          className="w-full  justify-center rounded-md bg-gray-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Cancel
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Send
                      </button>
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

export default SendPage;
