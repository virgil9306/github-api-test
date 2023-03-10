import React from 'react';
// Styling
import './Button.css';

type TButtonProps = {
  text: string,
  buttonType?: "submit" | "button" | "reset" | undefined,
  buttonValue?: string,
  callback?: Function | null,
};

const Button = ({
  text,
  buttonType,
  buttonValue,
  callback,
}:TButtonProps) => { 

  const eventProps = {
    ...(callback && {
      onClick: (e:any) => {
        e.preventDefault(); // prevent refresh
        callback();
      },
    }),
  };

  return (
    <button
      className='Button'
      type={buttonType}
      value={buttonValue}
      {...eventProps}
      >
      {text}
    </button>
  );
};

export default Button;

