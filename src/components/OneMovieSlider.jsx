import './OneMovieSlider.css';
import data from '../data';
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const OneMovieSlider = () => {
  const [index, setIndex] = useState(0);
  const { image, title, description, tags } = data[index];

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className='one-movie'>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{tags}</p>
      <button onClick={handlePrevious}>
        <FaArrowAltCircleLeft />
      </button>
      <button onClick={handleNext}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};

export default OneMovieSlider;
