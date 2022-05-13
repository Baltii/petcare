import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar';



const Home = () => {
  return (
    <div id='cover'>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <div style={{width: '600px', textAlign: 'center', marginTop: '-100px'}}>
        <h1 id='title'>Make your pet feel Safe and Happy</h1>
        <p id='description'>Find a verified and reviewed sitter who
        'll keep your pets company and give them al the time,
         care and attention in the world.</p>
         <button to="/search" className='button'>Find a pet sitter</button>
        </div>
        
      </div>
    </div>
  )
}

export default Home