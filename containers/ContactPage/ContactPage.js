import React from 'react';
import classes from './ContactPage.module.css';
import Input from '../../components/Input/Input';
import ContactPageImage from '../../assets/SVG-uri/ContactSVG.svg';

const ContactPage = () => {
  const inputTypes = {
    firstName: {
      inputName: 'First Name',
      type: 'text',
      required: true,
    },
    lastName: {
      inputName: 'Last Name',
      type: 'text',
      required: true,
    },
    email: {
      inputName: 'Email',
      type: 'email',
      required: true,
    },
    address: {
      inputName: 'Address',
      type: 'text',
      required: true,
    },
    phone: {
      inputName: 'Phone',
      type: 'number',
      required: true,
    },
  };

  let inputTypesArray = [];
  for (let key in inputTypes) {
    inputTypesArray.push(inputTypes[key]);
  }

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '90%',
      }}>
      <div className={classes.ContactPage}>
        <div className={classes.ContactPageFormDiv}>
          <h1>Send your details</h1>
          <form>
            {inputTypesArray.map((element) => {
              return (
                <Input
                  key={element.inputName}
                  name={element.inputName}
                  type={element.type}
                  required={element.required}
                />
              );
            })}
            <input
              type='submit'
              className={classes.SubmitButton}
              value='Send'
            />
          </form>
        </div>
        <div className={classes.ContactPageImageDiv}>
          <img src={ContactPageImage} alt='Contact' />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
