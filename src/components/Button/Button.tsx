import React from 'react';
// Styling
import './Button.css';

type TButtonProps = {
  text: string,
  buttonType?: "submit",
  buttonValue?: string,
  callback?: (args?:any) => any
};

const Button = ({
  text,
  buttonType,
  buttonValue,
  callback = () => {},
}:TButtonProps) => { 
  return (
    <button
      type={buttonType}
      value={buttonValue}
      onClick={(event) => {
        callback();
        event.preventDefault(); // prevent refresh
      }}
      >
      <span>{text}</span>
    </button>
  );
};

export default Button;

