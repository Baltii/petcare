import React from 'react';
import './HeroBoarding.css';

const HeroBoarding = () => {
  return (
      <>
      <section className='hero-image'>
        <div className='hero-text'>
            <h1 style={{fontSize:'70px'}}>Boarding</h1>
            <h1 style={{fontWeight :'lighter',fontSize:'30px'}}>Leave your pet in the most caring of hands.</h1>
             <button className='hero-button'>Schedule Pet Boarding</button>
         </div>
    </section>  
</>
    
  )
}

export default HeroBoarding