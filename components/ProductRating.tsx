import React from "react";

export default function Rating({rate, count}:any) {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-row">
        <i className="bi bi-star-fill" style={{ fontSize: "0.6rem" }}></i>
        <i className="bi bi-star-fill" style={{ fontSize: "0.6rem" }}></i>
        <i className="bi bi-star-fill" style={{ fontSize: "0.6rem" }}></i>
        <i className="bi bi-star-fill" style={{ fontSize: "0.6rem" }}></i>
        <i className="bi bi-star" style={{ fontSize: "0.6rem" }}></i>
      </div>
      <div>
        <span className="text-xs ml-1">{count}</span>
      </div>
    </div>
  );
}
