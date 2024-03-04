import React from 'react';
import Customtempleimageone from '../../Assets/Cstom_Teple_one.jpg'
import Customtempleimagetwo from '../../Assets/Custom_Temple_Two.jpg'
import Customtempleimagethree from '../../Assets/Custom_Temple_Three.jpg'
import './Templebanner.css'
import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

const Templebanner = ({ templeimages = [], title = "Default Title" }) => {
  const defaultImages = [
    Customtempleimageone,
    Customtempleimagetwo,
    Customtempleimagethree
  ];

  return (
    <div className='temple_banner_whole'>
      <div className="slide-container">
      <Fade>
        {defaultImages.map((image, index) => (
          <div key={index}>
            <img style={{ width: '100%', height:"75vh" }} alt="templebnnr" src={index < templeimages.length ? `${process.env.REACT_APP_BACKEND_URL}/${templeimages[index]}` : image} />
            {/* <h2>{title}</h2> */}
          </div>
        ))}
      </Fade>
    </div>
    </div>
  );
};

export default Templebanner;
