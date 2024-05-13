import Link from "next/link";
import React from "react";

const MyButton = ({ href, className, children }) => {
  return (
    <div>
      <Link
        href={href}
        className={`border rounded-lg p-2 uppercase shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:bg-white/20 transition-colors focus:ring-2 focus:ring-blue-400 active:bg-blue-300/50 active:ring-blue-300 ${className}`}>
        {children}
      </Link>
    </div>
  );
};

export default MyButton;
