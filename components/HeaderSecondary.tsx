import fetcher from "@/services/fetch";
import { log } from "console";
import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";

export default function HeaderSecondary() {
  const status = {
    data: [1, 2, 3],
  };

  return (
    <div className="flex flex-row items-center justify-around py-2 bg-slate-900 border-y border-gray-700">
      <div className="flex flex-row w-28 justify-evenly">
        <Link href={"signin"} aria-label="Sign In To Your Account">
          <i className="bi bi-person" style={{ fontSize: "1.5rem" }}></i>
        </Link>
        <Link href={"cart"} aria-label="View Your Shopping Cart.">
          <CartIcon status={status} />
        </Link>
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
