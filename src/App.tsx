
import LandingPage from './pages/LandingPage';

import { Routes,Route } from 'react-router-dom';
import Temp from './pages/Temp';

function App() {

  return (
    <>

        <Routes>

            <Route path='/' element={<LandingPage></LandingPage>}></Route>

            <Route path='/temp' element={<Temp></Temp>}></Route>

        </Routes>
    </>
  )
}

export default App
