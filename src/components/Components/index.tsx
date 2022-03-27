import { useState } from 'react';
import { CustomButton } from '../shared/CustomButton';
import { Input } from '../shared/Input';
import { LikeDislike } from '../shared/LikeDislike';
import { Comment } from '../shared/Comment';
import { DropDown } from '../shared/DropDown';
import { TextField } from '../shared/TextField';
import { Reply } from '../shared/Reply';
import avatar from '../../assets/avatar.jpg';
import { Menu } from '../Menu';

export const Components = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <button onClick={() => setValue('new value')}>Click cme</button>
      <br />
      <p>button</p>
      <CustomButton text={'Click me'} onClick={undefined} color={'main'} />
      <br />
      <p>input</p>
      <Input value={value} setValue={setValue} />
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
      <p>Drop Down</p>
      <DropDown />
      <br />
      <p>Menu</p>
      <Menu />
    </>
  );
};
