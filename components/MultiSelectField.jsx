"use client";
import Select from "react-select";

const options = [
  { value: "pevač", label: "Pevač" },
  { value: "pevačica", label: "Pevačica" },
  { value: "bubnjar", label: "Bubnjar" },
  { value: "klavijaturista", label: "Klavijaturista" },
  { value: "klavijaturista-aranzer", label: "Klavijaturista-Aranžer" },
  { value: "gitarista", label: "Gitarista" },
  { value: "harmonikaš", label: "Harmonikaš" },
  { value: "violinista", label: "Violinista" },
  { value: "saksofonista", label: "Saksofonista" },
  { value: "razglas", label: "Razglas" },
];

export default function MultiSelectField({ className }) {
  return (
    <Select
      options={options}
      isMulti
      className={`text-gray-700 mb-10 ${className}`}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          fontSize: 12,
          borderColor: state.isFocused ? "grey" : "green",
        }),
      }}
    />
  );
}
