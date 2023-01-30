import React from "react";

export default function Button({ data }: any) {
  return (
    <button
      type="button"
      className="ring-1 ring-slate-100 py-1 px-5 self-center my-3"
    >
      {data}
    </button>
  );
}
