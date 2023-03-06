import React, { useEffect, useState } from "react"
// Styling
import './SearchBox.css';
// Components
import Button from '../Button/Button';
// API
import { search } from '../../api';
// Types
import { TGitHubItem } from '../../types';

type TSearchBoxProps = {
  callback: (list: Array<TGitHubItem>) => any
};

const SearchBox = ({ callback }: TSearchBoxProps) => {
  const [inputValue, setInputValue] = useState('');

  // Data fetch
  const fetchData = () => {
    if (inputValue !== '') {
      console.log("Fetching data for ", inputValue);
      search(inputValue)
        .then(list => callback(list));
    } else {
      alert('Please enter a query. (Example: GitHub Octocat in:readme user:defunkt)');
    }
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter search query:
          <input type="text" value={inputValue} onChange={onChangeHandler} />
        </label>
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
