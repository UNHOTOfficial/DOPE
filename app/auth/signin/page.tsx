"use client";
import Button from "@/components/Button";
import fetcher from "@/services/fetch";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "../../../public/Logo.svg";
import {
  signIn,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Github from "next-auth/providers/github";
import { BuiltInProviderType } from "next-auth/providers";

export default function Page() {
  const { data: session } = useSession();
  console.log({ data: session });

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    async function fetchProviders() {
      const providers = await getProviders();
      setProviders(providers);
    }
    fetchProviders();
  }, []);

  // // Handles the submit event on form submit.
  // const handleSubmit = async (event: any) => {
  //   const data = {
  //     email: event.target.email.value,
  //     password: event.target.password.value,
  //   };
  //   // Stop the form from submitting and refreshing the page.
  //   event.preventDefault();

  //   const res = await signIn("credentials", {
  //     email: data.email,
  //     password: data.password,
  //   });

  //   console.log(res);
  //   // Get data from the form.
  //   // // API endpoint where we send form data.
  //   // const endpoint = "/api/users";

  //   // // Send the form data to our forms API on Vercel and get a response.
  //   // const response = await fetcher(endpoint, "static");

  //   // // Get the response data from server as JSON.
  //   // // If server returns the name submitted, that means the form works.

  //   // if (response.data.some((e: any) => e.email === data.email)) {
  //   //   alert("Logged In!");
  //   // } else {
  //   //   alert("Wrong!");
  //   // }
  // };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex flex-col items-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <Link
          href={"/"}
          className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="my-4"
            src={Logo}
            alt="DOPE"
            width={184}
            height={32}
          />
        </Link>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                onClick={() => signIn(provider.id)}
                className="mx-auto ring-1 ring-white py-3 px-7 rounded"
                key={provider.id}
              >
                <i className="bi bi-github mr-2"></i> Sign in with{" "}
                {provider.name}
              </button>
            ))}
        </div>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-800 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-800">
            or sign in with credentials
          </span>
        </div>

        <div className="w-full px-6 pt-2 pb-6 space-y-4 md:space-y-6 sm:px-8">
          <form
            className="space-y-4 md:space-y-6"
            // onSubmit={() => handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex justify-between mb-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  href={"forget"}
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="mx-auto ring-1 ring-white py-2.5 px-6 rounded"
              >
                Sign in
              </button>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                href={"/auth/signup"}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
