import { FC } from 'react';
import './index.css';
interface Props {
  items: string[];
  step: number;
  setStep: (step: number) => void;
}
export const Stepper: FC<Props> = ({
  items = ['first', 'seconde', 'third', 'fourth'],
  step,
  setStep,
}) => {
  return (
    <div className='stepper-container'>
      {items.map((item: string, index: number) => {
        return (
          <div key={index} className='step-container'>
            <div onClick={() => setStep(index)} className='step'>
              <div
                className={
                  step === index ? 'stepper-dot active' : 'stepper-dot'
                }
              ></div>
              <p className={step === index ? 'step-text active' : 'step-text'}>
                {item}
              </p>
            </div>
            {index !== items.length - 1 && <div className='stepper-line'></div>}
          </div>
        );
      })}
    </div>
  );
};
