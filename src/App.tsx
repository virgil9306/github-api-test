import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Button from './components/Button/Button'
import Container from './components/Container/Container'
import List from './components/List/List';
import Pager from './components/Pager/Pager';
import SearchBox from './components/SearchBox/SearchBox';
// Types
import { TGitHubItem } from './types';

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <Container>
        <SearchBox
          callback={(items: Array<TGitHubItem>) => setItems(items)}
        />
        <List items={items} />
      </Container>
    </div>
  );
}

export default App;
