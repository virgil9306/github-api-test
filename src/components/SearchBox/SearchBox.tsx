import React from "react"
// Styling
import './SearchBox.css';
// Components
import Button from '../Button/Button';

type TSearchBoxProps = {
  callback: any,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
};

const SearchBox = ({ callback, inputValue, setInputValue }: TSearchBoxProps) => {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callback();
  };

  const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='SearchBox'>
      <p className='header'>GitHub Issue Search</p>
      <p className='prompt'>Example: GitHub Octocat in:readme user:defunkt</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={onChangeHandler} />
        <Button
          text="Submit"
          buttonType="submit"
          buttonValue="Submit"
          />
      </form>
    </div>
  );
};

export default SearchBox;
