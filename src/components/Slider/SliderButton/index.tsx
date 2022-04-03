import { FC } from 'react';
import './index.css';
import nextArrow from '../../../assets/nextArrow.svg';
import prevArrow from '../../../assets/prevArrow.svg';

interface Props {
  direction: 'next' | 'prev';
  onClick: () => void;
}

export const SliderButton: FC<Props> = ({ direction, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={
        direction === 'next'
          ? 'slider-button slider-button-next'
          : 'slider-button slider-button-prev'
      }
      {...props}
    >
      <img src={direction === 'next' ? nextArrow : prevArrow} alt='arrow' />
    </button>
  );
};
