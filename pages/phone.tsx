import { NextPage } from "next";
import React, {useState} from "react";
import { useRouter } from "next/router";
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const PhonePage: NextPage = () => {
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('US');

  const countryCodes: { [key: string]: string } = {
    "US": '+1',
    "CA": '+1',
    "UK": '+44',
    "BD": '+880',
  }

  const sendNumber = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const phoneNumber = countryCodes[country] + phone;
    console.log(phoneNumber);
    const rawResponse = await fetch(baseURL + "sendOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: phoneNumber }),
    });
    const content = await rawResponse.json();
    console.log(content);
    if(content.success){
        localStorage.setItem("number", phoneNumber);
        router.push("/otp");
    }
  };
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1598798710023-8682deb58a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80')",
      }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="./logo.png" width="250" alt="" />

            <span className="text-gray-300">
              Enter Phone Number for verification
            </span>
          </div>
          <form action="#" onSubmit={sendNumber}>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>UK</option>
                  <option>BD</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute top-0 right-3 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 py-2 px-3.5 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={e => { setPhone(e.currentTarget.value); }}
              />
            </div>
          </div>
          

            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-blue-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600"
              >
                Enter{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhonePage;
