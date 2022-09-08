import React from 'react';

import { InputStyle } from './styles';

interface InputProps {
    text: string;
    backgroundColor: string;
    colorFont: string;
    width: string;
    register?: any;
    onkeydown?: any;
    onChange?: any;
    type?: string;
}

const Input: React.FC<InputProps> = ({...props}) => (
    <InputStyle
        {...props}
        placeholder={props.text}
        ref={props.register}
        onKeyPress={props.onkeydown}
        type={props.type}
    />
);

export default Input;