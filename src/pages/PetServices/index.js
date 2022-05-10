import React from 'react'
import Boarding from './Boarding'

const HomeServices = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/Services/Boarding' element={<Boarding />} />
      
    </Routes>
  </Router>
  )
}

export default HomeServices