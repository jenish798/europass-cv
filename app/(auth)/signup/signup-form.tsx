"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useFormState } from "react-dom";
import { createUser } from "./actions";
import Image from "next/image";
import logo from "@/public/images/rsr_logo.webp";
import { useState } from "react";

const SignUp = () => {
  const [state, action] = useFormState(createUser, []);

  return (
    <>
      <div className="flex justify-between items-center pt-3 px-10 bg-green-100">
        <Image src={logo} alt="logo" />
        <div>

        </div>
      </div>
      <div className=" min-h-screen flex flex-col md:flex-row p-5 md:p-0 justify-center items-center bg-green-100">

        <div className="md:h-3/4 bg-cover md:pr-10 lg:content-center basis-2/5 ">
          <div className="grid grid-rows-1 p-5 md:p-0 gap-5 lg:gap-16 text-black">
            <h1 className="w-full lg:w-4/5 text-xl sm:text-2xl lg:text-3xl font-bold md:mb-6 text-center md:text-left">
              Create a standout resume effortlessly with our intuitive CV
              builder.
            </h1>
            <ul className="list-disc text-justify text-md sm:text-lg md:text-md lg:text-lg font-light list-inside mb-6 space-y-6">
              <li>
                Build a professional CV in minutes with our easy-to-use tool.
              </li>
              <li>Access customizable templates tailored to your industry.</li>
              <li>Save and edit your CV anytime, from anywhere.</li>
              <li>Get tips and guidance to enhance your resume's impact.</li>
              <li>Join now and take the first step towards your dream job!</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
          <div className="w-full py-7 bg-slate-100 shadow-lg rounded-3xl">
            <h1 className="text-xl md:text-3xl font-bold p-2 mb-2 text-center text-black">
              Sign up now to craft a professional CV
            </h1>
            <form action={action}>
              <div className=" mb-4 mx-4 sm:mx-12 md:mx-4 lg:mx-12 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>

              <div className="mb-4 mx-4 sm:mx-12 md:mx-4 lg:mx-12 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>

              <div className="mb-4 mx-4 sm:mx-12 md:mx-4 lg:mx-12 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
                
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-700 rounded-md text-white py-2 px-4 hover:bg-green-600 font-bold focus:outline-none mx-2"
                >
                  Create an account
                </button>
                <Link
                  href="/"
                  className="bg-gray-300 rounded-md text-black py-2 px-4 hover:bg-green-600 focus:outline-none hover:text-white font-bold mx-2"
                >
                  Cancel
                </Link>
              </div>
              <h1 className="m-4 mx-4 lg:mx-12 gap-4 text-center">
                Already having an account?{" "}
                <a
                  href="/login"
                  className=" font-medium text-blue-500 hover:text-blue-700"
                >
                  Login
                </a>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
