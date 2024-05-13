import Image from "next/image";
import logo from "@/public/Musicians logo big-1.png";
import Link from "next/link";
import MotionDiv from "@/components/utilities/MotionDiv";

export default function Home() {
  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}>
        <main className="flex flex-col items-center justify-center h-screen p-4 drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <h1 className="text-4xl mb-1 drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            Dobrodošli
          </h1>
          <p className="italic text-md pt-2">
            Organizujte svirku za dva minuta
          </p>
          <Image src={logo} width={220} alt="logo" className="m-8" />
          <form className="flex flex-col items-center gap-3 justify-center m-4">
            <label htmlFor="username">Korisničko ime</label>
            <input
              type="text"
              id="username"
              // required
              className="w-40 h-8 p-2 rounded-sm text-black"></input>
            <label htmlFor="password">Lozinka</label>
            <input
              type="password"
              id="password"
              // required
              className="w-40 h-8 p-2 rounded-sm text-black"></input>
            <Link href={"/pages/dashboard"}>
              <button className="bg-blue-500 border-2 rounded-md py-2 px-12 m-8">
                Prijavi se
              </button>
            </Link>
            <div className="flex flex-col items-center">
              <p className="mb-2">Nisi član?</p>
              <Link href={"/registracija"} className="underline">
                Registracija
              </Link>
            </div>
          </form>
        </main>
      </MotionDiv>
    </>
  );
}
