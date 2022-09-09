import React from "react";
import {Dropdown} from './styles';

interface DropDownProps {
  OnChangeFunction?: () => void;
  optionList: string[];
  placeholder: string
  width: string;
  heigth: string;
}

const DropdownComponent = ({OnChangeFunction, optionList, placeholder ,width, heigth}: DropDownProps) => {
  return (
    <>
      <Dropdown
        as="select"
        onChange={OnChangeFunction}
        optionList={optionList}
        placeholder={placeholder}
        width={width}
        heigth={heigth}
      >
        <option value="" disabled selected hidden>{placeholder}</option>
        {optionList?.map((optionListItem, index) => (
          <option key={index}>
            {optionListItem}
          </option>
        ))}
      </Dropdown>
  </>
)};

export default DropdownComponent;