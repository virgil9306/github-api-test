import React from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Button from './components/Button/Button'
import Container from './components/Container/Container'
import List from './components/List/List';
import Pager from './components/Pager/Pager';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <div className="App">
      <Container>
        <SearchBox />
      </Container>
    </div>
  );
}

export default App;
