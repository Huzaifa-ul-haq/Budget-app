
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './component/header/home/home'

function App() {

  return (
    <>
    <Routes>
    <Route>
    <Route index element={<Home />} />
  </Route>
    </Routes>
      
    </>
  )
}

export default App
