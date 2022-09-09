import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from './components/webpage/MainScreen'

import './App.css';

function App() {
  return (
    <div className="Home-Body Column-Center">
      <BrowserRouter>
      <Routes>

      <Route path={'/'} element={<Main/>}/>
      
      </Routes>

      </BrowserRouter>
      <Main/>
    </div>
  );
}

export default App;
