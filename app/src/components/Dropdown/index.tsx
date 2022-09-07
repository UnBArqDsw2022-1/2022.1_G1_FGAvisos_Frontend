import React from "react";
import {Dropdown} from './styles';

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
    <option value={value} disabled selected hidden>{value}</option>
    {optionList?.map((optionListItem, index) => (
      <option key={index}>
        {optionListItem}
      </option>
    ))}
  </Dropdown>
  </>
)};

export default DropdownComponent;