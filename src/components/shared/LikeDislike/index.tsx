import './index.css';
import { ReactComponent as Like } from '../../../assets/Like.svg';
import { ReactComponent as DisLike } from '../../../assets/dislike.svg';
import { useState } from 'react';
interface Props {
  numberOfLikesDislikes: number;
  type?: 'like' | 'dislike';
}

export const LikeDislike: React.FC<Props> = ({
  numberOfLikesDislikes,
  type = 'like',
}) => {
  const [clicked, setClicked] = useState(false);
  const [number, setNumber] = useState(numberOfLikesDislikes);

  const handleClick = () => {
    setClicked(!clicked);
    if (!clicked) {
      setNumber(number + 1);
    } else {
      setNumber(number - 1);
    }
  };
  return (
    <div className='like-dislike-container' onClick={handleClick}>
      {type === 'like' ? (
        <Like fill={clicked ? '#52575C' : 'none'} />
      ) : (
        <DisLike fill={clicked ? '#52575C' : 'none'} />
      )}
      <p>{number}</p>
    </div>
  );
};
