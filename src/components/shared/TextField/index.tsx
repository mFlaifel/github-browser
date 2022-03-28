import { FC } from 'react';
import './index.css';

interface Props {
  value: string | null;
  setValue: any;
  placeholder?: string;
}

export const TextField: FC<Props> = ({
  value,
  setValue,
  placeholder = 'Enter your comment here',
  ...props
}) => {
  return (
    <textarea
      className='custom-text-field'
      placeholder={placeholder}
      value={value || ''}
      onChange={setValue}
      {...props}
    />
  );
};
