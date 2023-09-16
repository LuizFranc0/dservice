import React from 'react';
import './App.css';
import { Header } from './components/Header';
import Body from './components/Body';
import Description from './components/Description';
import History from './components/History';


function App() {
  return ( 
    <>
    <Header/>
    <Body/>
    <Description/>
    <History/> 
    </>
    
  );
}

export default App;
