import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="flex fixed bottom-0 left-0 bg-gradient-to-r from-gray-900 via-blue-950 to-gray-950 border-t w-screen justify-center text-sm p-2 z-50">
        Copyright © "Visual Solution's" - {year}
      </div>
      <overlay className="bg-yellow-300 fixed bottom-0 left-0 w-full h-[36px] opacity-[.07] z-50"></overlay>
    </>
  );
};

export default Footer;
