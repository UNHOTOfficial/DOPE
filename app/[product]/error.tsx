"use client";

import Button from "@/components/Button";
import React from "react";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error.message);
  return (
    <div className="flex flex-col items-center justify-center h-52">
      <i className="text-2xl font-bold bi bi-heartbreak"></i>
      <span className="mb-2 text-2xl font-bold">Something Went Wrong.</span>
      <Button data={"Retry"} type="reset" addedClass="" />
    </div>
  );
}
