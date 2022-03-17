import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
import { Modal } from '../Modal';

export const UserRepo = (props: {
  name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <li>{props.name}</li>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
        }}
        title={props.name + ' repo issues'}
        body={<></>}
      />
    </>
  );
};
