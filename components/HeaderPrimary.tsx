import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";

export default function headerPrimary() {
  return (
    <div className="flex flex-row items-center justify-around bg-slate-800 py-5">
      <i
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="bi bi-list"
        style={{ fontSize: "1.5rem" }}
      ></i>
      <DropDownMenu items={["Men", "Women", "Kids", "Collections", "Sale"]} />
      <Link href={"/"}>
        <Image src={Logo} alt="DOPE" width={184} height={32}></Image>
      </Link>
      <i className="bi bi-question-square" style={{ fontSize: "1.5rem" }}></i>
    </div>
  );
}
