import { NextPage } from "next";
import React, {useState} from "react";
import { useRouter } from "next/router";


const PhonePage: NextPage = () => {
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [phone, setPhone] = useState('');

  const sendNumber = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
    const rawResponse = await fetch(baseURL + "sendOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: phone }),
    });
    const content = await rawResponse.json();
    console.log(content);
    if(content.success){
        localStorage.setItem("number", phone);
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
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-100 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="xxxxxxxx"
                value={phone}
                onChange={e => { setPhone(e.currentTarget.value); }}
              />
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
