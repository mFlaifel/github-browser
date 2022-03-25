import { useState } from 'react';
import { CustomButton } from '../shared/CustomButton';
import { Input } from '../shared/Input';
import { LikeDislike } from '../shared/LikeDislike';
import { Comment } from '../shared/Comment';

export const Components = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <p>button</p>
      <CustomButton text={'Click me'} onClick={undefined} color={'main'} />
      <p>input</p>
      <Input value={value} setValue={setValue} />
      <p>like</p>
      <LikeDislike numberOfLikesDislikes={10} />
      <p>dislike</p>
      <LikeDislike numberOfLikesDislikes={10} type='dislike' />
      <p>comment</p>
      <Comment />
    </>
  );
};
