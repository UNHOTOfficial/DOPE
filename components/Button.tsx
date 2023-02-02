import React from "react";

export default function Button({ data, type, addedClass }: any) {
  return (
    <button
      type={type}
      className={
        "ring-1 ring-slate-100 py-1 px-5 self-center my-3 " + addedClass
      }
    >
      {data}
    </button>
  );
}
