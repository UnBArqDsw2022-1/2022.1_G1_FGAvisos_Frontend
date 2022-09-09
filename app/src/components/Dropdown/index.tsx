import React from "react";
import {Dropdown} from './styles';

interface DropDownProps {
  OnChangeFunction?: () => void;
  optionList: string[];
  value: string;
  width: string;
  heigth: string;
}

const DropdownComponent = ({OnChangeFunction, optionList, value, width, heigth}: DropDownProps) => {
  return (
    <>
      <Dropdown
        as="select"
        onChange={OnChangeFunction}
        optionList={optionList}
        value={value}
        width={width}
        heigth={heigth}
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