import { MouseEventHandler } from 'react';
import { useFetch } from '../../utils/useFetch';
import './index.css';

export const Modal = (props: {
  show: boolean;
  onClose: MouseEventHandler;
  userName: string;
}) => {
  const { data, loading } = useFetch(
    `https://api.github.com/users/${props.userName}`
  );
  const repos = useFetch(
    `https://api.github.com/users/${props.userName}/repos`
  );
  if (!props.show) return null;

  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h3> {data?.login}</h3>
        <div className='modal-body'>
          <ul>
            <li>Location:{data.location}</li>
            <li>Bio: {data.bio}</li>
            <li>account Type: {data.type}</li>
          </ul>
          {repos?.data?.length > 0 && (
            <div>
              repos:
              <ul>
                {repos.data.map((repo: any) => (
                  <li>{repo.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className='modal-actions'>
          <button onClick={props.onClose}>close</button>
        </div>
      </div>
    </div>
  );
};
