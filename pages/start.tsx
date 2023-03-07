import { NextPage } from "next";
import React from "react";
import {
  LockOpenIcon
} from "@heroicons/react/24/outline";

const StartPage: NextPage = () => {

  
  return (
    <div className="isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto w-125 h-225" src="./logo.png" alt="" />
        <figure className="mt-10">
        <div className="text-center">
      
      <h1 className="font-medium text-purple-600 text-2xl mb-4">Your address:</h1>
      <div className="flex items-center p-4 m-2 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-300 dark:text-gray-200">
                    0x2cd02ad9B1304fcc50FEbE6A41e663B9Ef69666a
                    </p>
                  </div>
                
                </div>
                
                <div className="flex items-center p-4 m-2 bg-white rounded-lg shadow-xs dark:bg-gray-500">
                  <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>

                  </div>
                  <div className="text-center">
                 
                    <p className="text-lg font-semibold text-gray-300 dark:text-gray-200">
                    
                    Mobile number linked to <h2>+8801521330801 </h2> 
                    </p>
                  </div>
                
                </div>
      
      <span className="inline-flex items-center rounded-full p-2 bg-red-300 text-white group transition-all duration-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none" role="alert" tabIndex="0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>


      
        <span className="whitespace-nowrap inline-block group-hover:max-w-screen-2xl group-focus:max-w-screen-2xl max-w-0 scale-80 group-hover:scale-100 overflow-hidden transition-all duration-500 group-hover:px-2 group-focus:px-2">*********************</span>
      </span>
      

      </div>
        
        </figure>
      </div>
    </div>
   
  );
};

export default StartPage;