import MotionDiv from "@/components/utilities/MotionDiv";
import MyButton from "@/components/utilities/MyButton";
import Title from "@/components/utilities/Title";
import Link from "next/link";
import React from "react";

export default async function DetaljiUpitaPage() {
  const userData = await fetch("http://localhost:1337/api/users?populate=*");
  const eventData = await fetch("http://localhost:1337/api/angazmani");
  const userJsonData = await userData.json();
  const eventJsonData = await eventData.json();
  //   console.log(userJsonData);
  //   console.log(eventJsonData.data[1].attributes.naziv);

  const date = new Date(
    eventJsonData.data[1].attributes.datum
  ).toLocaleDateString("sr-RS");

  const time =
    new Date(eventJsonData.data[1].attributes.datum)
      .toLocaleTimeString("sr-RS")
      .slice(0, 5) + "h";

  console.log(time);

  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}>
        <div className="flex flex-col items-center pt-4 gap-3">
          <Title title="Detalji upita" />

          {/* TABELA */}
          <table className={"text-[10px] border-collapse "}>
            {/* Dinamicke tabele ovo je hard coded*/}
            <thead>
              <tr>
                <th className="border-y px-4 py-2">Datum</th>
                <th className="border-y px-4 py-2">Pozvao</th>
                <th className="border-y px-4 py-2">Dogadjaj</th>
                <th className="border-y px-4 py-2">Mesto</th>
                <th className="border-y px-4 py-2">Potvrda</th>
              </tr>
            </thead>

            <tbody>
              <tr className=" border-y border-opacity-30 border-yellow-300 text-[10px]">
                <td className="px-4 py-2">{date}</td>
                <td className="px-4 py-2">{userJsonData[0].username}</td>
                <td className="px-4 py-2">
                  {eventJsonData.data[1].attributes.naziv}
                </td>
                <td className="px-4 py-2">
                  {" "}
                  {eventJsonData.data[1].attributes.Mesto}
                </td>
                <td className="px-4 py-2 text-green-400">
                  <button className="border px-1 rounded-sm"> Prihvati</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-3 border-t border-b p-1 text-[11px]">
            <div className="flex flex-col items-center">Početak:</div>
            <div className="flex flex-col items-center text-yellow-300">
              {time}
            </div>
          </div>

          {/* KONTAKT */}
          <div className="flex gap-8 mt-4">
            <MyButton href="/pages/dashboard/lista-upita">
              Pošalji poruku
            </MyButton>
            <MyButton href="/pages/dashboard/lista-upita">Pozovi</MyButton>
          </div>

          {/* INFO */}
          <p className="px-6 mt-4 text-center text-[11px] text-yellow-200">
            * Klikom na prihvati, event Vam se pojavljuje u "Event listi".
          </p>

          {/* OPIS */}
          <div className="mx-8 mt-4 mb-4">
            <h1 className="text-2xl mb-4 border-b">Opis</h1>
            <p>
              Svadba je u Nera Event Centru. Ima 150 gostiju. Potrebni su
              bubnjar, klavijaturista, gitarista i harmonikaš.
            </p>
          </div>

          {/* NAZAD NA LISTU UPITA BUTTON */}
          <Link href="/pages/dashboard/lista-upita">
            <MyButton href="/pages/dashboard/lista-upita">
              Nazad na listu upita
            </MyButton>
          </Link>
        </div>
      </MotionDiv>
    </>
  );
}
