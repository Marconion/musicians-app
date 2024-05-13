"use client";
import Image from "next/image";
import logo from "@/public/Musicians logo big-1.png";
import { useRouter } from "next/navigation";

const LogoBtn = () => {
  const router = useRouter();
  return (
    <>
      <Image
        src={logo}
        width={170}
        alt="logo"
        className="m-8"
        onClick={() => router.push("/")}
      />
    </>
  );
};
export default LogoBtn;
