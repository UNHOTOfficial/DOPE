import React, { Children } from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";

export default function ScrollMenu({ title, children }: any) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center py-2 font-bold text-xl">{title}</h1>
      <div className="grid grid-flow-col gap-4 overflow-auto  max-w-sm">
        {children}
      </div>
      <Button data="See More..." type="button" />
    </div>
  );
}
