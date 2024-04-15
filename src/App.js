import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Main from './Pages/Main'
// import BackgroundBeams from './ui/BackgroundBeams'
import Header from './Components/common/Header'
function App() {
  return (
    <div className='bg-richblue-900 h-full w-full'>
      <BrowserRouter>
    <Header/>
=    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    {/* <BackgroundBeams/> */}

    </BrowserRouter>


    </div>
    
  )
}

export default App