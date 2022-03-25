import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
import { useFetch } from '../../utils/useFetch';
import { Modal } from '../shared/Modal';
import './index.css';

export const UserRepo = (props: {
  repoName:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  userName: string;
  setShow: any;
}) => {
  const [showPulls, setShowPulls] = useState(false);
  const { data } = useFetch(
    `https://api.github.com/repos/${props.userName}/${props.repoName}/pulls`
  );

  return (
    <>
      <li
        className='repo-li'
        onClick={() => {
          setShowPulls(true);
          // props.setShow(false);
        }}
      >
        {props.repoName}
      </li>
      <Modal
        show={showPulls}
        onClose={() => {
          setShowPulls(false);
        }}
        title={props.repoName + ' repo issues'}
        body={
          <>
            {console.log(data)}
            {data?.length > 0
              ? data.map(
                  (item: {
                    html_url: string | undefined;
                    title:
                      | boolean
                      | ReactChild
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                    node_id: string | undefined;
                  }) => (
                    <div key={item.node_id}>
                      <a href={item.html_url}>{item.title}</a>
                    </div>
                  )
                )
              : 'there no pull requests for this repo'}
          </>
        }
      />
    </>
  );
};
