import { FC } from 'react';

import './index.css';
interface Props {
  placeholder?: string;
  options?: { label: string; value: string | number }[];
}

export const DropDown: FC<Props> = ({
  placeholder = 'select an option',
  options = [
    { label: 'option1', value: 1 },
    { label: 'option2', value: 2 },
    { label: 'option3', value: 3 },
  ],
  ...props
}) => {
  return (
    <div className='custom-dropdown-container'>
      <select {...props} className='custom-drop-down'>
        {placeholder && (
          <option selected hidden value={''}>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
