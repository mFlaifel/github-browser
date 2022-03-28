import { LikeDislike } from '../LikeDislike';
import './index.css';
import React from 'react';

interface Props {
  avatar?: any;
  userName?: string;
  date?: string;
  comment?: string;
}

export const Comment: React.FC<Props> = ({
  userName = 'Savannah Miles',
  date = 'Oct 4, 20144 9:14 pm',
  comment = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed   eiusmod tempor ncididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut  aliquip ex ea commodo consequat. ipus',
  avatar,
}) => {
  return (
    <div className='comment'>
      <div className='comment-avatar'>
        {avatar ? <img src={avatar} alt='avatar' /> : ''}
        <div>
          <p className='comment-user-name'>{userName}</p>
          <p className='comment-date'>{date}</p>
        </div>
      </div>
      <div className='comment-body'>
        <div className='comment-text'>
          <p>{comment}</p>
        </div>
        <div className='comment-actions'>
          <div className='comment-action-like'>
            <LikeDislike numberOfLikesDislikes={10} />{' '}
            <LikeDislike numberOfLikesDislikes={1} />
          </div>
          <a href='/' className='comment-reply'>
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};
