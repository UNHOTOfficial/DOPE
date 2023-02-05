import Link from "next/link";
import React from "react";

export default function DropDownMenu({ items }: any) {
  return (
    <div
      id="dropdown"
      className="w-full z-10 hidden bg-white divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <ul
        className="p-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        {items.map((item: any) => (
          <li key={item}>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="flex flex-row justify-between font-semibold">
                <span>{item}</span>
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
