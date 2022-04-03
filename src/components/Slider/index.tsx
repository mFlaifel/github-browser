import { FC, useState } from 'react';
import { SliderImageInterface } from '../../interfaces';
import './index.css';
import { SliderButton } from './SliderButton';

interface Props {
  items: SliderImageInterface[];
}

export const Slider: FC<Props> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleNext = () => {
    if (activeItem === items.length - 1) {
      setActiveItem(0);
    } else {
      setActiveItem(activeItem + 1);
    }
  };

  const handlePrev = () => {
    if (activeItem === 0) {
      setActiveItem(items.length - 1);
    } else {
      setActiveItem(activeItem - 1);
    }
  };
  const moveDot = (activeItem: number) => {
    setActiveItem(activeItem);
  };
  return (
    <div className='slider-container'>
      <img src={items[activeItem].src} className='slider-image' alt='slider' />
      <SliderButton direction='prev' onClick={handlePrev} />
      <SliderButton direction='next' onClick={handleNext} />
      <div className='container-dots'>
        {Array.from({ length: items.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={
              activeItem === index
                ? 'slider-dot slider-dot-active'
                : 'slider-dot'
            }
          ></div>
        ))}
      </div>
    </div>
  );
};
