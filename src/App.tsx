import React from 'react';
import Header from './components/Header';
import Routes from './routes';
import './App.css';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default App;
