import { NextPage } from "next";
import React from "react";
import {
    ArrowRightCircleIcon
  } from "@heroicons/react/24/outline";
import Link from "next/link";

const PasswordPage: NextPage = () => {
  
  return (
    <section className="grid h-screen place-content-center bg-slate-900 text-slate-300">
      <div className="mb-10 text-center text-indigo-400">
        <h1 className="text-3xl font-bold tracking-widest">Set password</h1>
        <p>
          <span className="font-bold">Password</span> and{" "}
          <span className="font-bold">Confirm</span> validation.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
        />
        <div>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
            className="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
          />
          <p
            id="validation"
            className="text-center text-orange-500 italic text-sm"
          ></p>
        </div>
        <Link href='/kyc'>
        <button
          id="showPw"
          className="rounded-full bg-indigo-500 p-2 px-4 text-white hover:bg-orange-500"
        >
          <span id="showHide">Proceed <ArrowRightCircleIcon className="h-6 w-6 inline"/> </span> 
        </button>
        </Link>
      </div>
    </section>
  );
};

export default PasswordPage;
