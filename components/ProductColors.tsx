import React from "react";

export default function ProductColors(colors: any) {
  return (
    <div>
      {colors.colors.map((color: any) => (        
        <span
          key={color.title}
          className="border border-black"
          style={{
            height: "16px",
            width: "16px",
            backgroundColor: color,
            borderRadius: "50%",
            display: "inline-block",
            marginRight: "0.2rem",
          }}
        ></span>
      ))}
    </div>
  );
}
