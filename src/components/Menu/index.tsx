import { FC, useState } from 'react';
import folder from '../../assets/folder.svg';
import trueIcon from '../../assets/true.svg';
import './index.css';

type Data = { value: string; label: string; icon?: any };
interface Props {
  data?: any;
  name?: string;
  icon?: string;
  value?: string | number | undefined;
  setValue?: any;
  type?: 'user' | 'menu';
}

export const Menu: FC<Props> = ({
  name = 'Menu item',
  icon = folder,
  data = [
    { value: 1, label: 'option 1', icon: folder },
    { value: 2, label: 'option2', icon: folder },
  ],
  type = 'menu',
  value,
  setValue,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(icon);
  const [selectedName, setSelectedName] = useState(name);
  const [isSelected, setIsSelected] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (value: string | number, name: string, icon: string) => {
    setOpen(false);
    setValue(value);
    if (icon) setSelectedIcon(icon);
    setSelectedName(name);
    setIsSelected(true);
  };

  return (
    <div className={`menu-container ${open && 'menu-container-border'}`}>
      <div
        className={`menu-first-item ${
          isSelected && !open ? 'selected' : 'menu-hover'
        }`}
        onClick={handleOpen}
      >
        <div className={`menu-item-flex`}>
          {selectedIcon && (
            <img
              src={selectedIcon}
              className={type === 'user' ? 'menu-item-user-avatar' : ''}
              alt='menu title'
            />
          )}
          <p className='custom-menu-title' {...props}>
            {selectedName}
          </p>
        </div>
        {isSelected && !open && (
          <img src={trueIcon} alt='selected' className='selected-icon' />
        )}
      </div>
      {open && (
        <div className={`menu-items-container ${open ? 'z-1' : ''}`}>
          {data?.map((item: Data) => (
            <div
              className='menu-item-flex menu-hover'
              onClick={() => handleSelect(item.value, item.label, item?.icon)}
              key={item.value}
            >
              {item?.icon && <img src={item.icon} alt='menu option' />}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
