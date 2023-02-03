import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/Logo.svg";
export default function Footer() {
  return (
    <div className="flex flex-col my-4 border-t border-slate-600">
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="flex flex-col">
          <span>Company</span>
          <span>About</span>
          <span>Contact</span>
          <span>Careers</span>
          <span>Blog</span>
        </div>
        <div className="flex flex-col">
          <span>Help Center</span>
          <span>FAQs</span>
          <span>Guides</span>
          <span>Order Tracking</span>
          <span>Warranty</span>
        </div>
        <div className="flex flex-col">
          <span>Legal</span>
          <span>Privacy Policy</span>
          <span>Terms And Conditions</span>
          <span>Refund Policy</span>
        </div>
        <div className="flex flex-col">
          <span>Status</span>
          <span>Services Status</span>
          <span>Report A Problem</span>
          <span>Bug Bounty</span>
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
        <span>© Dope 2023, All Rights Reserved.</span>
        <span className="mt-1 text-xs">
          Made With <i className="bi bi-heart-fill text-red-600"></i> By Unhot.
        </span>
      </div>
    </div>
  );
}
