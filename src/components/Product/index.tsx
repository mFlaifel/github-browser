import { FC, useState } from 'react';
import { Menu } from '../Menu';
import { DropDown } from '../shared/DropDown';
import { Input } from '../shared/Input';
import { Stepper } from '../shared/Stepper';
import avatar from '../../assets/avatar.jpg';
import avatar1 from '../../assets/avatar1.png';

import './index.css';
import { TextField } from '../shared/TextField';
import { CustomButton } from '../shared/CustomButton';

interface Props {
  stepperItems: string[];
}

export const Product: FC<Props> = ({ stepperItems }) => {
  const [step, setStep] = useState(0);
  const createInitialState = (items: string[]) =>
    items.map(() => {
      return {
        product: '',
        jopTitle: '',
        price: '',
        projectState: '',
        productType: '',
        employeeName: '',
        comment: '',
      };
    });

  const [productValues, setProductValues] = useState(
    createInitialState(stepperItems)
  );

  const updateValues = (
    index: number,
    name: string,
    value: string | number | undefined
  ) => {
    if (!value) return;
    setProductValues((prevState) =>
      prevState.map((item, index) => {
        if (index === step) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className='product-container'>
      {/* <div className='product-stepper'> */}
      <Stepper items={stepperItems} step={step} setStep={setStep} />
      {/* </div> */}
      {stepperItems?.map((item, index) => {
        return (
          <div
            key={item + index}
            className={
              step === index ? 'product-form-container' : 'display-none'
            }
          >
            <div className='product-form'>
              <div className='product-form-section'>
                <div className='product-form-item'>
                  <label htmlFor='product name'>productName</label>
                  <Input
                    setValue={(value: string | number | undefined) =>
                      updateValues(index, 'product', value)
                    }
                    value={productValues[index].product}
                    placeholder=''
                  />
                </div>
                <div className='product-form-item'>
                  <label htmlFor='job-title'>Job title</label>
                  <DropDown
                    placeholder='Drop Down'
                    value={productValues[index].jopTitle}
                    setValue={(value: string | number | undefined) =>
                      updateValues(index, 'jobTitle', value)
                    }
                  />
                </div>
                <div className='product-form-item'>
                  <label htmlFor='project-state'>Project state</label>
                  <Menu
                    value={productValues[index].projectState}
                    setValue={(value: string | number | undefined) =>
                      updateValues(index, 'projectState', value)
                    }
                  />
                </div>
              </div>
              <div className='product-form-section'>
                <div className='product-form-item'>
                  <label htmlFor='product-type'>Product Type</label>
                  <DropDown
                    placeholder='Drop Down'
                    value={productValues[index].productType}
                    setValue={(value: string | number | undefined) =>
                      updateValues(index, 'productType', value)
                    }
                  />
                </div>
                <div className='product-form-item'>
                  <p>Choose the employee you work with </p>
                  <Menu
                    name='Robert Warren'
                    icon={avatar1}
                    value={productValues[index].employeeName}
                    setValue={(value: string | number | undefined) =>
                      updateValues(index, 'employeeName', value)
                    }
                    data={[
                      {
                        value: 'Robert Warren',
                        label: 'Robert Warren',
                        icon: avatar1,
                      },
                      {
                        value: 'Savannah Miles',
                        label: 'Savannah Miles',
                        icon: avatar,
                      },
                    ]}
                  />
                </div>
                <div className='product-form-item'>
                  <p>product financing</p>
                  <div className='product-service'>
                    <div className='product-dot'></div> External financing
                  </div>
                  <div className='product-service'>
                    <div className='product-dot'></div>Internal financing
                  </div>
                  <div className='product-service'>
                    <div className='product-dot'></div> Governmental
                  </div>
                </div>
              </div>
            </div>
            <div className='product-form-item'>
              <label htmlFor='price'>extra data</label>
              <TextField
                placeholder='Enter your comment here'
                height='8rem'
                value={productValues[index].comment}
                setValue={(value: string | number | undefined) =>
                  updateValues(index, 'comment', value)
                }
              />
              <div className='product-button-group'>
                <CustomButton text='Save and Confirm' />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
