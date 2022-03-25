import { useState } from 'react';
import { UserInterface } from '../../interfaces';
import { useFetch } from '../../utils/useFetch';
import { Modal } from '../shared/Modal';
import { UserRepo } from '../UserRepo';
import './index.css';

export const User: React.FC<UserInterface> = ({ id, avatar_url, login }) => {
  const [show, setShow] = useState(false);
  const { data } = useFetch(`https://api.github.com/users/${login}`);
  const repos = useFetch(`https://api.github.com/users/${login}/repos`);
  return (
    <div key={id} className='user-item' onClick={() => setShow(true)}>
      <img src={avatar_url} alt='' />
      <p>{login}</p>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
        }}
        title={login}
        body={
          <div className='user-modal'>
            <b>User information</b>
            <ul>
              {data?.location && <li>Location:{data.location}</li>}
              {data?.bio && <li>Bio: {data.bio}</li>}
              {data?.type && <li>account Type: {data.type}</li>}
            </ul>
            {repos?.data?.length > 0 && (
              <div className='modal-repo-text'>
                <b>repos:</b>
                <ul className='user-repo'>
                  {repos.data.map((repo: any) => (
                    <UserRepo
                      repoName={repo.name}
                      userName={login}
                      setShow={setShow}
                      key={repo.id}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
};
