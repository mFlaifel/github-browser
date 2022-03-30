import { SetStateAction, useState } from 'react';
import './index.css';

interface Props {
  placeholder?: string;
  value: string;
  type?: 'search' | 'default';
  setValue: any;
}

export const Input: React.FC<Props> = ({
  placeholder = 'search for users',
  value,
  setValue,
  type = 'default',
}) => {
  const [tempValue, setTempValue] = useState(value);
  const handleInputFinished = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setValue((e.target as HTMLInputElement).value);
    }
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    if (type === 'search') {
      setTempValue(e.target.value);
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <input
      type='text'
      value={type === 'search' ? tempValue : value}
      className='custom-input'
      placeholder={placeholder}
      onKeyUp={handleInputFinished}
      onChange={handleChange}
    />
  );
};
