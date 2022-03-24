import { SetStateAction, useState } from 'react';
import './index.css';

interface Props {
  placeholder?: string;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: React.FC<Props> = ({
  placeholder = 'search for users',
  user,
  setUser,
}) => {
  const [value, setValue] = useState(user);
  const handleInputFinished = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('e', e);
    if (e.key === 'Enter') {
      console.log((e.target as HTMLInputElement).value);
      setUser((e.target as HTMLInputElement).value);
    }
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  return (
    <input
      type='text'
      value={value}
      className='custom-input'
      placeholder={placeholder}
      onKeyUp={handleInputFinished}
      onChange={handleChange}
    />
  );
};
