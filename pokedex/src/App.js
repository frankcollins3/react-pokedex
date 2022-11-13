import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Main from './components/webpage/MainScreen'
import TypeScreen from './components/webpage/TypeScreen'
import InfoScreen from './components/webpage/InfoScreen'
import {Container} from './components/styles/Container.styled.js'
import { $ } from 'react-jquery-plugin'
import React, { useEffect, useState} from 'react'
import './App.css';
import './components/styles/styles.scss';
import myCSS from './components/utility/CSStool'


// import * as env from 'dotenv'
// env.config()
// console.log(process.env.hi)





// bring in a new scss file and do them both at the same time

function App() {
console.log(window)
  const FB = window.FB
  console.log(FB)

  
    
  
  // console.log(process.env.TITLE)
  // console.log(process.env.REACT_APP_TITLE)
  // console.log(process.env.REACT_APP_Pokedex)
  
  // console.log(process.env.REACT_APP.Pokedex)
  

  const client = ''
  const access_token = '' 

  const handlefunctionresponse = (response) => {
    console.log(`encoded JWT ID Token` + response.token)
  }



  useEffect( () => {

    /* global google  */
    // google.accounts.id.initiate
    // google.accounts.id.initiate({
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
  const [thirdPagePoke, setThirdPagePoke] = useState('')

  const secretClick = (event) => {
    let target = $(event.target)
    target.detach()
    
    // myCSS(target, 'border', '5px solid hotpink')
    $('#signInDiv').click()

  }

  return (
    <div className="Home-Body Column-Center">
      <div onClick={secretClick} id="secretSignIn" className="Column-Center">
      <div id="signInDiv"></div>
      </div>
      {/* <h1> hey </h1> 
      <h1> hi  </h1> 
      <h1> ho  </h1>  */}
    {/*  was checking to see if i could access the functions from JWT but didn't understand the methods were hidden in <Script src="google/gsi/client" */}
      <Router>

      <Routes>

      <Route path={'/'} element={
      <Main 
       google={google}
       starterPokemon={starterPokemon} setStarterPokemon={setStarterPokemon}
       currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} thirdPage={thirdPage} setThirdPage={setThirdPage}
       fakeDbState={fakeDbState} setFakeDbState={setFakeDbState} ghost={ghost} setGhost={setGhost} 
       catchEmAll={catchEmAll} setCatchEmAll={setCatchEmAll} lock={lock} setLock={setLock}      
       />}/>

      <Route path={'/pokemon'} element={
      <TypeScreen 
        thirdPagePoke={thirdPagePoke} setThirdPagePoke={setThirdPagePoke}
        google={google}
        currentUrl={currentUrl} setCurrentUrl={setCurrentUrl}  thirdPage={thirdPage} setThirdPage={setThirdPage}
        fakeDbState = {fakeDbState} setFakeDbState={setFakeDbState} ghost={ghost} setGhost={setGhost}
        catchEmAll={catchEmAll} setCatchEmAll={setCatchEmAll} lock={lock} setLock={setLock}
      />}/>

      <Route path={'/pokemon/:id'} element={
      <InfoScreen       
        thirdPagePoke={thirdPagePoke} setThirdPagePoke={setThirdPagePoke}
        google={google}
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
