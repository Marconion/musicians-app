import MotionDiv from "@/components/utilities/MotionDiv";
import MyButton from "@/components/utilities/MyButton";
import Title from "@/components/utilities/Title";
import Link from "next/link";
import React from "react";

export default async function DashboardPage() {
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
          <Title title="Detalji eventa" />

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
                <td className="px-4 py-2 text-green-400">potvrđeno</td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-5">
            <div className="flex gap-3 border-t border-b p-1 text-[11px] items-center">
              <div className="flex flex-col items-center">Početak:</div>
              <div className="flex flex-col items-center text-yellow-300">
                {time}
              </div>
            </div>
            <button className="border rounded-sm border-red-400 px-3 py-1 text-red-400 hover:bg-red-500/20 transition-colors ease-in-out duration-300">
              Otkaži
            </button>
          </div>
          <div className="flex flex-col w-56">
            <h1 className="text-2xl flex justify-center">Saradnici</h1>

            <div className="flex flex-col">
              <div className="flex gap-4 justify-between">
                <p>Bubnjar:</p>
                <p className="text-yellow-200">Djidji</p>
              </div>
              <div className="flex gap-4 justify-between">
                <p>Klavijaturista:</p>
                <p className="text-yellow-200">Saša Pešić</p>
              </div>
              <div className="flex gap-4 justify-between">
                <p>Gitarista:</p>
                <p className="text-yellow-200">Petar Trumbetaš</p>
              </div>
              <div className="flex gap-4 justify-between">
                <p>Pevačica:</p>
                <p className="text-yellow-200">Milica Ristić</p>
              </div>
              <div className="flex gap-4 justify-between mt-4">
                <p>Razglas:</p>
                <p className="text-yellow-200">Šone</p>
              </div>
            </div>
          </div>

          <div className="mx-8 mt-4 mb-4">
            <h1 className="text-2xl mb-4 border-b">Opis</h1>
            <p>
              Svadba je u Stadion Hall-u. Ima 200 gostiju. Pesma za prvi ples je
              Oliver Dragojevic - A kad mi dodjes ti.
            </p>
          </div>

          <MyButton href="/pages/dashboard">Nazad na listu</MyButton>
        </div>
      </MotionDiv>
    </>
  );
}
