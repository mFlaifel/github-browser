import { FC } from 'react';
import './index.css';

interface Props {
  value: string | null;
  setValue: any;
  placeholder?: string;
  height?: string;
}

export const TextField: FC<Props> = ({
  value,
  setValue,
  placeholder = 'Enter your comment here',
  height = 'auto',
  ...props
}) => {
  const handleChange = (e: { target: { value: string } }) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      className='custom-text-field'
      placeholder={placeholder}
      value={value || ''}
      onChange={handleChange}
      style={{ height: height }}
      {...props}
    />
  );
};
