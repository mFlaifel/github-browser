import { CustomButton } from '../CustomButton';
import './index.css';

export const Modal = (props: {
  show: boolean;
  onClose: any;
  body: any;
  title: string;
}) => {
  if (!props.show) return null;

  return (
    <div
      className='modal'
      onClick={() => {
        console.log('close');
        props.onClose();
      }}
    >
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h3> {props.title}</h3>
        <div className='modal-body'>{props.body}</div>
        <div className='modal-actions'>
          <CustomButton onClick={props.onClose} text='close' />
        </div>
      </div>
    </div>
  );
};
