import { NextPage } from "next";
import { useRouter } from "next/router";
import Assets from "tauri/components/layouts/Assets";
import Layout from "../components/layouts/Layout";

const HomePage: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="container pt-6 px-3">
        <div className="min-h-screen mt-16">
          <h1 className="text-gray-900  text-2xl text-center">Personal</h1>
          <p className="text-gray-900 text-md text-center">01xxxxxxxxx</p>

          <div className="flex gap-3 my-3">
            <button
              onClick={() => router.push("/buy")}
              className="w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Buy
            </button>

            <button
              onClick={() => router.push("/send")}
              className="w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>

          <h2 className="text-gray-900 my-5 text-xl">Assets</h2>

          <Assets />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
