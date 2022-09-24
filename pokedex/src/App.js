import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Main from './components/webpage/MainScreen'
import React, { useEffect, useState} from 'react'

import './App.css';

function App() {
  const [fakeDbState, setFakeDbState] = useState([])
  const [ghost, setGhost] = useState('false')


  return (
    <div className="Home-Body Column-Center">
      <Router>
      <Routes>

      <Route path={'/'} element={<Main fakeDbState={fakeDbState} setFakeDbState={setFakeDbState} ghost={ghost} setGhost={setGhost}/>}/>
      
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
