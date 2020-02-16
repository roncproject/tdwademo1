import React from 'react';
import './data.css';

import ca from '../../img/pic-1.jpg'
import sun from '../../img/sun-icon.svg';
import ru from '../../img/pic-2.jpg';
import snow from '../../img/snow-icon.svg';


const Data = () => {

    return (
        <section>
            <div className='floater'>
                <div className='icon-temp'>
                    <img src={sun} alt='Sun' />
                    <p id='temp'>Data</p>
                </div>
                <p>Another paragraph</p>
            </div>
            <img src={ca} alt='Los Angeles' id='country-img' />
            <div className='country'>
                <div>
                    <p>Los Angeles</p>
                    <p>CALIFORNIA</p>
                </div>
                <div>
                    <p>Los Angeles</p>
                    <p>CALIFORNIA</p>
                </div>
            </div>
        </section>
  );
}

export default Data;