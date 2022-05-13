import React from 'react';
import './HowWorks.css';
import Match from '../../../images/Match.png';
import Meet from '../../../images/meet.png';
import Relax from '../../../images/relax.png';


const HowWorks = () => {
  return (
    <>
    <section id='HowWorks'>
        <h1 style={{marginBottom: '80px', fontSize: '40px'}}>“How boarding Pet Care Works”</h1>
        
        <div class="card">
        <div className="cardService">
            <div className="cardService-icon"><img src={Match} alt=""/></div>
            <div className="cardService-text">
                <h4>Match</h4>
                <p>Browse profiles of sitters near you who offer overnight pet boarding.</p>
            </div>
        </div>
        <div className="cardService">
            <div className="cardService-icon"><img src={Meet} alt=""/></div>
            <div className="cardService-text">
                <h4>Meet</h4>
                <p>You meet with the local sitter virtually or in-person (your choice) to decide if they are right for you.</p>
            </div>
        </div>
        <div className="cardService">
            <div className="cardService-icon"><img src={Relax} alt=""/></div>
            <div className="cardService-text">
                <h4>Relax</h4>
                <p>Relax as you receive written, photo, and video updates on your pet’s care.</p>
            </div>
        </div>
        </div>
         

    </section>


    </>
  )
}

export default HowWorks