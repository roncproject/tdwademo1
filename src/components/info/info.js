import React from 'react';
import './info.css';
import bg from '../../img/bg-shape.svg';


const Info = () => {
    return (
        <section>
            <img src={bg} alt='Background shape' id='bg' />
            <h1>SHOW<br/>ME<span>FINANCE</span></h1>
            <p>A minimal data app design to tickle your toxic interest.
            <br />Designed and developed by ShowMeFinance Team @ BeCentral.</p>
            <div className='bottom'>
                <p>Your data is currently showing in:</p>
                <div className='buttons'>
                    <div className='btn'>
                        <button> T </button>
                        <p>Table</p>
                    </div>
                    <div className='btn'>
                        <button> C </button>
                        <p>Chart</p>
                    </div>
                </div>        
            </div>
        </section>
    );
}

export default Info;
