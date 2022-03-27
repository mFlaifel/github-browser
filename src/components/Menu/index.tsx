import { FC, useState } from 'react';

interface Props {
  data?: { value: string; label: string; img?: any }[];
}

export const Menu: FC<Props> = ({
  data = [
    { value: 1, label: 'option 1' },
    { value: 2, label: 'option2' },
  ],
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <p className='custom-menu-title' onClick={handleOpen}>
        Menu
      </p>
      {open && data && data.map((item) => (
          
      )}
    </div>
  );
};
