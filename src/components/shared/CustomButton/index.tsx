import { FC, MouseEventHandler } from 'react';

import './index.css';

interface props {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  color?: 'main' | 'success' | 'danger' | 'warning' | 'black';
}

export const CustomButton: FC<props> = ({
  onClick = undefined,
  text = 'Click me',
  color = 'main',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className='custom-button'
      style={{ background: `var(--${color})` }}
      {...props}
    >
      {text}
    </button>
  );
};
