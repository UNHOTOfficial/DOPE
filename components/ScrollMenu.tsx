import React, { Children } from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";

export default function ScrollMenu({ title, children }: any) {
  return (
    <div className="flex flex-col">
      <h1 className="text-center py-2 font-bold text-lg">{title}</h1>
      <div className="grid overflow-auto gap-2 px-2 grid-flow-col">
        {children}
      </div>
      <Button data="See More..." />
    </div>
  );
}
