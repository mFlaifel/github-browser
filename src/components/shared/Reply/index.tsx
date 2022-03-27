import { FC, useState } from 'react';
import { CustomButton } from '../CustomButton';
import { TextField } from '../TextField';
import './index.css';
interface Props {
  avatar?: any;
}

export const Reply: FC<Props> = ({ avatar, ...props }) => {
  const [comment, setComment] = useState(null);
  return (
    <div>
      <div className='comment-container'>
        {avatar && <img src={avatar} alt='avatar' />}
        <TextField value={comment} setValue={setComment} {...props} />
      </div>
      <div className='reply-button-group'>
        <CustomButton text='Add Comment' />
      </div>
    </div>
  );
};
