import MotionDiv from "@/components/utilities/MotionDiv";
import Title from "@/components/utilities/Title";
import Link from "next/link";
import React from "react";

const IstorijaUpitaPage = () => {
  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}>
        <div className="flex flex-col items-center pt-4 gap-3">
          <Title title="Istorija upita" />
          <p className="text-sm">Istorija svih poslatih i primljenih upita</p>
          <p>
            Filter:{" "}
            <input
              type="month"
              value={new Date().toISOString().substring(0, 7)}
              className="text-black ml-2"
            />
          </p>
          <div className="flex flex-col items-center">
            <table className="table-auto text-[11px] ">
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
                <tr className="border-y border-opacity-30 border-yellow-50">
                  <td className="px-4 py-2">25.5.2024.</td>
                  <td className="px-4 py-2">Marko Žujović</td>
                  <td className="px-4 py-2">Svadba</td>
                  <td className="px-4 py-2">Beograd</td>
                  <td className="px-4 py-2 text-green-400">potvrđeno</td>
                </tr>
                <tr className="border-y border-opacity-30 border-yellow-50">
                  <td className="px-4 py-2">25.6.2025.</td>
                  <td className="px-4 py-2">Dzo</td>
                  <td className="px-4 py-2">Krstenje</td>
                  <td className="px-4 py-2">Pančevo</td>
                  <td className="px-4 py-2 text-red-400">nepotvrđeno</td>
                </tr>
                <tr className="border-y border-opacity-30 border-yellow-50">
                  <td className="px-4 py-2">14.7.2025.</td>
                  <td className="px-4 py-2">Tesić</td>
                  <td className="px-4 py-2">Svadba</td>
                  <td className="px-4 py-2">Beograd</td>
                  <td className="px-4 py-2 text-green-400">potvrđeno</td>
                </tr>
                <tr className="border-y border-opacity-30 border-yellow-50">
                  <td className="px-4 py-2">8.8.2025.</td>
                  <td className="px-4 py-2">Saša Pešić</td>
                  <td className="px-4 py-2">Svadba</td>
                  <td className="px-4 py-2">Vranje</td>
                  <td className="px-4 py-2 text-green-400">potvrđeno</td>
                </tr>
                <tr className="border-y border-opacity-30 border-yellow-50">
                  <td className="px-4 py-2">15.8.2025.</td>
                  <td className="px-4 py-2">Saša Pešić</td>
                  <td className="px-4 py-2">Svadba</td>
                  <td className="px-4 py-2">Vranje</td>
                  <td className="px-4 py-2 text-red-400">nepotvrđeno</td>
                </tr>
              </tbody>
            </table>
            <p className="px-6 mt-4 text-center text-[11px] text-yellow-200">
              * Korisnik koji je poslao upit, kad potvrdi datum, event se
              updatuje i stiže Vam notifikacija.
            </p>
          </div>
        </div>
      </MotionDiv>
    </>
  );
};

export default IstorijaUpitaPage;
