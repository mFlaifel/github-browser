import { useState } from 'react';
import { UserInterface } from '../../interfaces';
import { Modal } from '../Modal';
import './index.css';

export const User: React.FC<UserInterface> = ({
  id,
  avatar_url,
  login,
  ...props
}) => {
  const [show, setShow] = useState(false);
  return (
    <div key={id} className='user-item' onClick={() => setShow(true)}>
      <img src={avatar_url} alt='' />
      <p>{login}</p>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
        }}
        userName={login}
      />
    </div>
  );
};
