import { NextPage } from "next";
import React from "react";
import Link from "next/link";


const PhonePage: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{backgroundImage:"url('https://images.unsplash.com/photo-1598798710023-8682deb58a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80')"}}>
    <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div className="text-white">
        <div className="mb-8 flex flex-col items-center">
          <img src="./logo.png" width="250" alt="" />
  
          <span className="text-gray-300">Enter Phone Number for verification</span>
        </div>
        <form action="#">
          <div className="mb-4 text-lg">
            <input className="rounded-3xl border-none bg-blue-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-100 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="xxxxxxxx" />
          </div>

          <div className="mt-8 flex justify-center text-lg text-black">
            <Link href='/otp'>
            <button type="submit" className="rounded-3xl bg-blue-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-600">Enter </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default PhonePage;