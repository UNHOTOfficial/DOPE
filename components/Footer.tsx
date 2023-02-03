import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/Logo.svg";
export default function Footer() {
  return (
    <div className="flex flex-col my-4 border-t border-slate-700">
      <div className="grid grid-cols-2 gap-4 p-4 text-gray-500">
        <div className="flex flex-col space-y-1">
          <span className="text-slate-100 font-semibold">Company</span>
          <Link className="hover:underline py-1" href={"/about"}>
            About
          </Link>
          <Link className="hover:underline py-1" href={"/contact"}>
            Contact
          </Link>
          <Link className="hover:underline py-1" href={"/careers"}>
            Careers
          </Link>
          <Link className="hover:underline py-1" href={"/blog"}>
            Blog
          </Link>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-slate-100 font-semibold">Help Center</span>
          <Link className="hover:underline py-1" href={"/faqs"}>
            FAQs
          </Link>
          <Link className="hover:underline py-1" href={"/guides"}>
            Guides
          </Link>
          <Link className="hover:underline py-1" href={"/tracking"}>
            Order Tracking
          </Link>
          <Link className="hover:underline py-1" href={"/warranty"}>
            Warranty
          </Link>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-slate-100 font-semibold">Legal</span>
          <Link className="hover:underline py-1" href={"/privacy"}>
            Privacy Policy
          </Link>
          <Link className="hover:underline py-1" href={"/terms"}>
            Terms And Conditions
          </Link>
          <Link className="hover:underline py-1" href={"/refund"}>
            Refund Policy
          </Link>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-slate-100 font-semibold">Status</span>
          <Link className="hover:underline py-1" href={"/status"}>
            Services Status
          </Link>
          <Link className="hover:underline py-1" href={"/problem"}>
            Report A Problem
          </Link>
          <Link className="hover:underline py-1" href={"/bug"}>
            Bug Bounty
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link href={"/"}>
          <Image
            className="my-4"
            src={Logo}
            alt="DOPE"
            width={184}
            height={32}
          />
        </Link>
        <div className="flex flex-col items-center border-t border-slate-700 w-11/12">
          <span className="mt-3 text-gray-500">
            © 2023 Dope™. All Rights Reserved.
          </span>
          <span className="mt-1 text-xs text-gray-500">
            Made With <i className="bi bi-heart-fill text-red-600"></i> By
            Unhot.
          </span>
          <div className="flex flex-row w-1/4 justify-around mt-2">
            <i className="bi bi-instagram text-gray-500 hover:text-slate-50"></i>
            <i className="bi bi-telegram text-gray-500 hover:text-slate-50"></i>
            <i className="bi bi-twitter text-gray-500 hover:text-slate-50"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
