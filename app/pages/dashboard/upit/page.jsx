import MotionDiv from "@/components/utilities/MotionDiv";
import React from "react";
import MultiSelectField from "@/components/MultiSelectField";
import Title from "@/components/utilities/Title";

const CalendarPage = () => {
  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}>
        <div className="flex flex-col items-center pt-4 gap-3">
          <Title title="Unesi upit" />
          <p className="text-sm">
            Unesi podatke vezane za predstojeći dogadjaj
          </p>
          <form className="flex flex-col items-center gap-2">
            <label htmlFor="datum">Datum</label>
            <input
              type="date"
              id="datum"
              // required
              className="w-40 h-8 p-2 rounded-sm text-black"></input>
            <label htmlFor="vreme">Vreme</label>
            <input
              type="time"
              id="vreme"
              // required
              className="w-40 h-8 p-2 rounded-sm text-black"></input>
            <label htmlFor="mesto">Mesto</label>
            <input
              type="text"
              id="mesto"
              // required
              className="w-40 h-8 p-2 rounded-sm text-black"></input>
            <label htmlFor="dogadjaj">Dogadjaj</label>
            <input
              type="text"
              id="dogadjaj"
              // required
              className="w-40 h-8 p-2 rounded-sm text-black"></input>
            <label>Potrebne pozicije</label>
            <MultiSelectField className={"w-64"} />
            {/* <Select
              options={options}
              isMulti
              className="w-64 text-gray-700 mb-10"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  fontSize: 12,
                  borderColor: state.isFocused ? "grey" : "green",
                }),
              }}
            /> */}

            <button className="bg-blue-500 border-2 rounded-md py-2 px-12 mx-8 ">
              Pošalji upit
            </button>
          </form>
        </div>
        <p className="px-6 mt-4 mb-5 text-center text-[11px] text-yellow-200">
          * Kada pošaljete upit, upit se pojavljuje svim Vašim saradnicima u
          listi upita.
        </p>
      </MotionDiv>
    </>
  );
};

export default CalendarPage;
