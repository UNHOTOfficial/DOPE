"use client";
import fetcher from "@/services/fetch";
import { log } from "console";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";

export default function HeaderSecondary() {
  type SessionData = {
    data: Session | null;
    status: "loading" | "authenticated" | "unauthenticated";
  };

  const { data: session, status } = useSession();

  return (
    <div className="flex flex-row items-center justify-around py-2 bg-slate-900 border-y border-gray-700">
      <div className="flex flex-row w-28 justify-evenly items-center">
        {status === "unauthenticated" ? (
          <React.Fragment>
            <Link href={"auth/signin"} aria-label="Sign In To Your Account">
              <UserIcon />
            </Link>
            <Link href={"cart"} aria-label="View Your Shopping Cart.">
              <CartIcon status={{ data: [1, 2, 3] }} />
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link href={"account"} aria-label="Sign In To Your Account">
              <UserIcon />
            </Link>
            <Link href={"cart"} aria-label="View Your Shopping Cart.">
              <CartIcon status={{ data: [1, 2, 3] }} />
            </Link>
          </React.Fragment>
        )}
      </div>
      <form>
        <input
          className="bg-slate-800 rounded-lg w-64 py-1 px-4 border border-slate-700"
          placeholder="Search For A Product..."
        ></input>
      </form>
    </div>
  );
}
