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
      <span className="mb-2">Something Went Wrong.</span>
      <Button data={"Retry"} type="reset" addedClass="" />
    </div>
  );
}
