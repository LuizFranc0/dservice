import React from 'react';
import './App.css';
import { Header } from './components/Header';
import Body from './components/Body';
import Description from './components/Description';
import History from './components/History';
import Footer from './components/Footer';
import { Partner } from './components/Partner';
import Maintenace from './components/Maintenance';


function App() {
  return ( 
    <>
    <Header/>
    <Body/>
    <Maintenace/>
    <Description/>
    <History/> 
    <Partner/>
    <Footer/>
    </>
    
  );
}

export default App;
