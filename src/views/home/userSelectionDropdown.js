import React, { useState } from "react";
import DropDown from "../../components/dropdown";
export default function UserSelectionDropdown({
  options = [
    { value: "Ron Weasley", label: "Ron Weasley" },
    { value: "Harry Potter", label: "Harry Potter" },
    { value: "Hermione Granger", label: "Hermione Granger" },
    { value: "Albus Dumbledore", label: "Albus Dumbledore" },
    { value: "Severus Snape", label: "Severus Snape" },
    { value: "Minerva McGonagall", label: "Minerva McGonagall" },
    { value: "Rubeus Hagrid", label: "Rubeus Hagrid" },
  ],
  value = [],
  onChange = () => {},
  setValue = () => {},
}) {
  const customDropdownStyle = {
    container: (provided, state) => {
      {
        return {
          ...provided,
          paddingRight: 0,
        };
      }
    },
    multiValue: (provided, state) => {
      return {
        ...provided,
        backgroundColor: "transparent",
        padding: "0 8px",
        fontSize: "14px",
      };
    },

    control: (provided, state) => {
      return {
        ...provided,
        minHeight: "52px",
        outline: "none",
        border: "1px solid #DADADA",
        borderRadius: "11px",
      };
    },
  };
  return (
    <DropDown
      styles={customDropdownStyle}
      onChange={(e) => {
        console.log(e);
        setValue(e);
      }}
      value={value}
      isMulti={true}
      options={options}
      isSearchable={true}
    />
  );
}
