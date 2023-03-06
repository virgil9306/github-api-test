import React, { useEffect, useState } from "react"
// Styling
import './SearchBox.css';
// Components
import Button from '../Button/Button';
// Types
import { TGitHubApiResponse, TGitHubItem } from '../../types';

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
    <div>
      <p>Enter search query</p>
      <p>(Example: GitHub Octocat in:readme user:defunkt)</p>
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
