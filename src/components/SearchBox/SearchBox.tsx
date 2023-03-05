import React, { useEffect, useState } from "react"
// Styling
import './SearchBox.css';
// Components
import Button from '../Button/Button';

type TSearchBoxProps = {};

const SearchBox = (props: TSearchBoxProps) => {
  const [inputValue, setInputValue] = useState('');

  // Data fetch
  const fetchData = () => {
    if (inputValue !== '') {
      console.log("Fetching data for ", inputValue);
      //someFetchPromise().then((results: TResult[]) => { });
    } // else ignore, nothing to submit
  };
  
  // Hooks
  useEffect(() => {
    // fetchData()
    console.log("Input value has changed", inputValue);
  }, [inputValue])

  const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={fetchData}>
        <label>
          Enter search query:
          <input type="text" value={inputValue} onChange={onChangeHandler} />
        </label>
        <Button
          text="Submit"
          buttonType="submit"
          buttonValue="Submit"
          callback={fetchData}
          />
      </form>
    </div>
  );
};

export default SearchBox;
