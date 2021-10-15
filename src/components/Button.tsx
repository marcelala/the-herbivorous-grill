// npm packages
import React from "react";

// Interface
interface iProps {
  children: any;
  theme: string;
  onClick: any;
}

export default function Button({ onClick, children, theme }: iProps) {
  return (
    <button className={"btn btn-" + theme} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
