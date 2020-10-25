import React from 'react';
import { Link } from 'react-router-dom';
import './Contacts.scss';
import _ from 'lodash/fp';
import { useForm } from 'react-hook-form';
import backgroundImg from './images/contactus.jpg';

interface Props {}

export const Contacts = (props: Props) => {
  return (
    <div className="q">
      <div className="wrapper">
        <div className="contact-form">
          <div className="input-fields">
            <input type="text" className="input" placeholder="Name" />
            <input type="text" className="input" placeholder="Email" />
            <input type="text" className="input" placeholder="Phone" />
          </div>
          <div className="msg">
            <textarea defaultValue="Message" />
            Message
            <div className="btn">Send</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
