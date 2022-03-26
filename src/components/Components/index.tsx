import { useState } from 'react';
import { CustomButton } from '../shared/CustomButton';
import { Input } from '../shared/Input';
import { LikeDislike } from '../shared/LikeDislike';
import { Comment } from '../shared/Comment';
import { DropDown } from '../shared/DropDown';

export const Components = () => {
  const [value, setValue] = useState('');
  return (
    <>
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
      <Comment />
      <br />
      <p>Drop Down</p>
      <DropDown />
    </>
  );
};
