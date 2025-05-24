import React, { useState, useEffect } from 'react';
import '../styles/shiftsPage/informationPage.css';

function Cover({ title, appointment, location, imgUrl, imgUrlOptimized }) {
  const [currentImage, setCurrentImage] = useState(imgUrl);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 830) {
        setCurrentImage(imgUrlOptimized);
      } else {
        setCurrentImage(imgUrl);
      }
    };
    handleResize();
    
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, [imgUrl, imgUrlOptimized]);

  return (
    <div className='cover' style={{ background: `url(${currentImage})` }}>
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