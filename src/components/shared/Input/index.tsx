import { SetStateAction, useState } from 'react';
import './index.css';

interface Props {
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: React.FC<Props> = ({
  placeholder = 'search for users',
  value,
  setValue,
}) => {
  const [tempValue, setTempValue] = useState(value);
  const handleInputFinished = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('e', e);
    if (e.key === 'Enter') {
      console.log((e.target as HTMLInputElement).value);
      setValue((e.target as HTMLInputElement).value);
    }
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTempValue(e.target.value);
  };

  return (
    <input
      type='text'
      value={tempValue}
      className='custom-input'
      placeholder={placeholder}
      onKeyUp={handleInputFinished}
      onChange={handleChange}
    />
  );
};
