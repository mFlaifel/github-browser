import { FC, useState } from 'react';
import folder from '../../../assets/folder.svg';
import down from '../../../assets/down.svg';

import './index.css';
interface Props {
  placeholder?: string;
  icon?: string;
  options?: { label: string; value: string | number; icon?: string }[];
  value?: string | number;
  setValue?: any;
}

export const DropDown: FC<Props> = ({
  placeholder = 'select an option',
  options = [
    { label: 'option1', value: 1, icon: folder },
    { label: 'option2', value: 2, icon: folder },
    { label: 'option3', value: 3, icon: folder },
  ],
  icon = folder,
  value,
  setValue,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(icon);
  const [selectedName, setSelectedName] = useState(placeholder);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (value: string | number, name: string, icon: string) => {
    setOpen(false);
    setValue(value);
    if (icon) setSelectedIcon(icon);
    setSelectedName(name);
  };

  return (
    <div className={`drop-down-container`}>
      <div className={`drop-down-first-item`} onClick={handleOpen}>
        <div className={`drop-down-item-flex drop-down-hover`}>
          {selectedIcon && <img src={selectedIcon} alt='drop-down title' />}
          <p className='custom-drop-down-title' {...props}>
            {selectedName}
          </p>
        </div>
        <img src={down} alt='selected' className='selected-icon' />
      </div>
      {open && (
        <div className='drop-down-items-container'>
          {options?.map((item: any) => (
            <div
              className='drop-down-item-flex'
              onClick={() => handleSelect(item.value, item.label, item.icon)}
              key={item.value}
            >
              {item?.icon && <img src={item.icon} alt='drop-down option' />}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// import { FC, useState } from 'react';
// import folder from '../../assets/folder.svg';
// import trueIcon from '../../assets/true.svg';
// import './index.css';

// type Data = { value: string; label: string; icon?: any };
// interface Props {
//   data?: any;
//   name?: string;
//   icon?: string;
//   value?: string | number | undefined;
//   setValue?: any;
// }

// export const Menu: FC<Props> = ({
//   name = 'Menu item',
//   icon = folder,
//   data = [
//     { value: 1, label: 'option 1', icon: folder },
//     { value: 2, label: 'option2', icon: folder },
//   ],
//   value,
//   setValue,
//   ...props
// }) => {
//   const [open, setOpen] = useState(false);
//   const [selectedIcon, setSelectedIcon] = useState(icon);
//   const [selectedName, setSelectedName] = useState(name);
//   const [isSelected, setIsSelected] = useState(false);
//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   const handleSelect = (value: string | number, name: string, icon: string) => {
//     setOpen(false);
//     setValue(value);
//     if (icon) setSelectedIcon(icon);
//     setSelectedName(name);
//     setIsSelected(true);
//   };

//   return (
//     <div className={`menu-container ${open && 'menu-container-border'}`}>
//       <div
//         className={`menu-first-item ${
//           isSelected && !open ? 'selected' : 'menu-hover'
//         }`}
//         onClick={handleOpen}
//       >
//         <div className={`menu-item-flex menu-hover`}>
//           {selectedIcon && <img src={selectedIcon} alt='menu title' />}
//           <p className='custom-menu-title' {...props}>
//             {selectedName}
//           </p>
//         </div>
//         {isSelected && (
//           <img src={trueIcon} alt='selected' className='selected-icon' />
//         )}
//       </div>
//       {open && (
//         <div className='menu-items-container'>
//           {data?.map((item: Data) => (
//             <div
//               className='menu-item-flex menu-hover'
//               onClick={() => handleSelect(item.value, item.label, item?.icon)}
//             >
//               {item?.icon && <img src={item.icon} alt='menu option' />}
//               <p key={item.value}>{item.label}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
