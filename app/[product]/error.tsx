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
    <div className="flex flex-col w-full h-80 items-center justify-center">
      <span className="mb-3">Something Went Wrong!</span>
      {<Button data="Try Again" type="reset" onclick={reset} />}
    </div>
  );
}
