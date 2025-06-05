import React from 'react';
import '../styles/shiftsPage/informationPage.css';

function Cover({ title, appointment, location, imgUrl }) {

  return (
    <div className='cover' style={{ background: `url(${imgUrl})` }}>
      <div className="cover__content wrap">
        <h2>{title}</h2>
        <p className='cover__content-appointment'>{appointment}</p>
        <hr />
        <p className='cover__content-location'>{location}</p>
      </div>
    </div>
  );
}

export default Cover;