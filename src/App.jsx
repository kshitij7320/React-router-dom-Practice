import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div><Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
      </Routes>
      </div>
  )
}

export default App