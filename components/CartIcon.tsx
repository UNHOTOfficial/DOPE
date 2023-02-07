"use client";

import React from "react";

export default function CartIcon({ status }: { status: any }) {
  if (status.data.length > 1) {
    return (
      <div className="inline-flex relative">
        <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 translate-y-full rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-1 text-xs bg-red-600 rounded-full z-10"></div>
        <i className="bi bi-bag" style={{ fontSize: "1.5rem" }}></i>
      </div>
    );
  } else {
    return <i className="bi bi-bag" style={{ fontSize: "1.5rem" }}></i>;
  }
}
