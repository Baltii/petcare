import React from 'react';
import './Benefits.css';
import Tick from '../../../images/tick.svg'

const Benefits = () => {
  return (
      <>
      <section id='Benefits-img'>
        <div className='Benefits-text'>
            <h1 style={{fontSize:'40px', marginBottom: '70px'}}>Benefits of pet boarding</h1>
            <div className='row'>
                <img src={Tick}/>
                <p style={{fontWeight :'lighter',fontSize:'25px'}}>Safety</p>
            </div>
            <div className='row'>
                <img src={Tick}/>
                <p style={{fontWeight :'lighter',fontSize:'25px'}}>Security</p>
            </div>
            <div className='row'>
                <img src={Tick}/>
                <p style={{fontWeight :'lighter',fontSize:'25px'}}>Privacy for your home</p>
            </div>
            <div className='row'>
                <img src={Tick}/>
                <p style={{fontWeight :'lighter',fontSize:'25px'}}>Expert care</p>
            </div>
            <div className='row'>
                <img src={Tick}/>
                <p style={{fontWeight :'lighter',fontSize:'25px'}}>Supervised environment</p>
            </div>
         </div>
    </section>  
</>
    
  )
}

export default Benefits