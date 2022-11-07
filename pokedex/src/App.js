import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Main from './components/webpage/MainScreen'
import TypeScreen from './components/webpage/TypeScreen'
import InfoScreen from './components/webpage/InfoScreen'
import {Container} from './components/styles/Container.styled.js'
import React, { useEffect, useState} from 'react'
import './App.css';
import './components/styles/styles.scss';




// bring in a new scss file and do them both at the same time

function App() {

  

  const client = ''
  const access_token = '' 

  const handlefunctionresponse = (response) => {
    console.log(`encoded JWT ID Token` + response.token)
  }



  useEffect( () => {

    /* global google  */
    // google.accounts.id.initiate
    console.log(google)
    // google.accounts.id.initiate({
    //   client_id: '391925163312-b27vd8l3b0ic5lcshtno1reo3rkktqk6.apps.googleusercontent.com',
    //   callback: handlefunctionresponse      
    // })
    // callback argument says: whenever someone logs in, what function do we run 

    //  google.accounts.id.renderButton(
    //   document.getElementById('signInDiv'),
    //   { theme: "outline", size: "large" }
    //  )
  }, [])

  const [fakeDbState, setFakeDbState] = useState([])
  const [ghost, setGhost] = useState('false')
  const [catchEmAll, setCatchEmAll] = useState('false')
  const [lock, setLock] = useState('locked')
  const [thirdPage, setThirdPage] = useState(false) // third eye

  const [starterPokemon, setStarterPokemon] = useState('')

  const [currentUrl, setCurrentUrl] = useState('')



  return (
    <div className="Home-Body Column-Center">
      <h1> hey </h1> 
      <h1> hi  </h1> 
      <h1> ho  </h1> 

      <Router>

      <Routes>

      <Route path={'/'} element={
      <Main 
       starterPokemon={starterPokemon} setStarterPokemon={setStarterPokemon}
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
