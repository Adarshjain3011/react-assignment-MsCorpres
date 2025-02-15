
import './App.css';

import LandingPage from './pages/LandingPage';

import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <>

        <Routes>

            <Route path='/' element={<LandingPage></LandingPage>}></Route>

        </Routes>
    </>
  )
}

export default App
