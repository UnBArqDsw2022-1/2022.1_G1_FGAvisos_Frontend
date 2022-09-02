import React from "react";
import Dropdown from './style';

interface DropDownProps {
  OnChangeFunction?: () => void;
  optionList: string[];
  value: string;
}

const DropdownComponent = ({OnChangeFunction, optionList, value}: DropDownProps) => {
  return (
    <>
  <Dropdown
    as="select"
    onChange={OnChangeFunction}
    value={value}
  >
    {optionList?.map((optionListItem, index) => (
      <option key={index}>
        {optionListItem}
      </option>
    ))}
  </Dropdown>
  </>
)};

export default DropdownComponent;