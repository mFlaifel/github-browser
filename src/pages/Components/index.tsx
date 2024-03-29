import { useState } from 'react';
import { CustomButton } from '../../components/shared/CustomButton';
import { Input } from '../../components/shared/Input';
import { LikeDislike } from '../../components/shared/LikeDislike';
import { Comment } from '../../components/shared/Comment';
import { DropDown } from '../../components/shared/DropDown';
import { TextField } from '../../components/shared/TextField';
import { Reply } from '../../components/shared/Reply';
import avatar from '../../assets/avatar.jpg';
import { Menu } from '../../components/Menu';
import folder from '../../assets/folder.svg';
export const Components = () => {
  // menu component
  const [selectedMenu, setSelectedMenu] = useState(1);
  const [value, setValue] = useState('');
  //input
  const [inputValue, setInputValue] = useState('');

  //dropdown component
  const [dropDownValue, setDropDownValue] = useState('');
  return (
    <>
      <button onClick={() => setInputValue('new value')}>Click cme</button>
      <br />
      <p>button</p>
      <CustomButton text={'Click me'} onClick={undefined} color={'main'} />
      <br />
      <p>input</p>
      <Input value={inputValue} setValue={setInputValue} />
      <br />
      <p>like</p>
      <LikeDislike numberOfLikesDislikes={10} />
      <br />
      <p>dislike</p>
      <LikeDislike numberOfLikesDislikes={10} type='dislike' />
      <br />
      <p>comment</p>
      <Comment avatar={avatar} />
      <br />
      <p>textField</p>
      <TextField value={value} setValue={setValue} />
      <br />
      <p>reply</p>
      <Reply avatar={avatar} />
      <br />
      <p>Menu</p>
      <Menu
        data={[
          { value: 1, label: 'option 1' },
          { value: 2, label: 'option2', icon: folder },
        ]}
        value={selectedMenu}
        setValue={setSelectedMenu}
      />
      <br />
      <p>Drop Down</p>
      <DropDown value={dropDownValue} setValue={setDropDownValue} />
      <br />
      <p>Users sam as menu</p>
      <Menu
        type='user'
        name='Savannah Miles'
        icon={avatar}
        data={[
          { value: 1, label: 'Savannah Miles', icon: avatar },
          { value: 2, label: 'Savannah Miles', icon: avatar },
        ]}
        value={selectedMenu}
        setValue={setSelectedMenu}
      />
    </>
  );
};
