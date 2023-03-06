import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Container from './components/Container/Container'
import List from './components/List/List';
import Pager from './components/Pager/Pager';
import SearchBox from './components/SearchBox/SearchBox';
// Types
import { TGitHubItem, TGitHubApiResponse } from './types';
// API
import { search } from './api';
// Constants
import { PER_PAGE } from './config/constants';

function App() {
  const [items, setItems] = useState<Array<TGitHubItem>>([]);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<null|number>(null);
  const [inputValue, setInputValue] = useState('');
  const [maxPages, setMaxPages] = useState(1);

  const fetchData = () => {
    if (inputValue !== '') {
      console.log("Fetching data for ", inputValue);
      search(inputValue, page)
        .then(({ items, total_count: totalCount, ...res}) => {
          console.log("Data received:", { res, items, totalCount });
          setItems(items);
          setResults(totalCount);
          setMaxPages(totalCount < PER_PAGE
            ? 1
            : Math.ceil(totalCount / PER_PAGE
          ));
        })
        // Display rate limiting and other errors to the user
        .catch((error: Error) => alert(error));
    } else {
      alert('Please enter a query. (Example: GitHub Octocat in:readme user:defunkt)');
    }
  };

  // Hooks
  // - Detect change in page number, and run fetchData accordingly
  useEffect(() => {
    // Don't fetch data on first load because nothing is in form
    if (inputValue !== '') {
      fetchData();
    }
  }, [page])

  const hasNextPage = maxPages > page;
  const hasPreviousPage = page > 1;

  return (
    <div className="App">
      <Container>
        <SearchBox
          callback={() => {
            // Trigger search by setting page back to 1
            if (page !== 1) {
              setPage(1);
            }
            // If it is already 1 just call fetchData()
            else {
              fetchData();
            }
          }}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        {results && <p className='results-counter'>Results: {results}</p>}
        {results && <Pager
          page={page}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          callbackNext={() => setPage(page + 1)}
          callbackPrev={() => setPage(page - 1)}
        />}
        <List items={items} />
      </Container>
    </div>
  );
}

export default App;
