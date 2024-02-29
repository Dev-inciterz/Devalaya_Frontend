import React from 'react';
import Customtempleimageone from '../../Assets/Cstom_Teple_one.jpg'
import Customtempleimagetwo from '../../Assets/Custom_Temple_Two.jpg'
import Customtempleimagethree from '../../Assets/Custom_Temple_Three.jpg'

const Templebanner = ({ templeimages = [], title = "Default Title" }) => {
  const defaultImages = [
    Customtempleimageone,
    Customtempleimagetwo,
    Customtempleimagethree
  ];

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {defaultImages.map((image, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {defaultImages.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={index < templeimages.length ? `${process.env.REACT_APP_BACKEND_URL}/${templeimages[index]}` : image}
                className="d-block w-100 img-fluid"
                alt={`${title} banner`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Templebanner;
