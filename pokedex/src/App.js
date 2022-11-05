import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Main from './components/webpage/MainScreen'
import TypeScreen from './components/webpage/TypeScreen'
import InfoScreen from './components/webpage/InfoScreen'
import {Container} from './components/styles/Container.styled.js'

import React, { useEffect, useState} from 'react'

import './App.css';
import './styles.scss';
// bring in a new scss file and do them both at the same time

function App() {
  const [fakeDbState, setFakeDbState] = useState([])
  const [ghost, setGhost] = useState('false')
  const [catchEmAll, setCatchEmAll] = useState('false')
  const [lock, setLock] = useState('locked')
  const [thirdPage, setThirdPage] = useState(false) // third eye

  const [currentUrl, setCurrentUrl] = useState('')



  return (
    <div className="Home-Body Column-Center">
      <Router>

      <Routes>

      <Route path={'/'} element={
      <Main 
       currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} thirdPage={thirdPage} setThirdPage={setThirdPage}
       fakeDbState={fakeDbState} setFakeDbState={setFakeDbState} ghost={ghost} setGhost={setGhost} 
       catchEmAll={catchEmAll} setCatchEmAll={setCatchEmAll} lock={lock} setLock={setLock}      
       />}/>

      <Route path={'/pokemon'} element={
        <TypeScreen 
      currentUrl={currentUrl} setCurrentUrl={setCurrentUrl}  thirdPage={thirdPage} setThirdPage={setThirdPage}
      fakeDbState = {fakeDbState} setFakeDbState={setFakeDbState} ghost={ghost} setGhost={setGhost}
      catchEmAll={catchEmAll} setCatchEmAll={setCatchEmAll} lock={lock} setLock={setLock}
      />}/>

      <Route path={'/pokemon/:id'} element={
      <InfoScreen       
      thirdPage={thirdPage} setThirdPage={setThirdPage} 
      currentUrl={currentUrl} setCurrentUrl={setCurrentUrl}
      />}/>
      
      </Routes>

      </Router>
      {/* <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Main/>}/>    
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
