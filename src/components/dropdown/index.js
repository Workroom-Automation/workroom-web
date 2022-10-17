import React from "react";
import Select from "react-select";

export default function CustomDropdown({
  options = [],
  placeholder = "",
  onChange = () => {},
  value = null,
  isMulti = false,
  isSearchable = false,
  isClearable = false,
  isDisabled = false,
  isRtl = false,
  styles = {},
  className = "",
  classNamePrefix = "",
}) {
  return (
    <>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        value={value}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isRtl={isRtl}
        styles={styles}
        className={className}
        classNamePrefix={classNamePrefix}
      />
    </>
  );
}
