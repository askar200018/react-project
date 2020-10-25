import React from 'react';
import { useActiveUser } from '../../contexts/ActiveUserContext';
import './Profile.scss';

interface Props {}

const Profile = (props: Props) => {
  const { activeUser, setActiveUser } = useActiveUser()!;
  return (
    <div className="q">
        <div className="wrapper">
        <form className="contact-form" >
          <div className="input-fields">
            <input type="text" onChange={(e)=>{activeUser.email=e.target.value}} name="name" className="input" placeholder="Name" />
            <input type="text" onChange={(e)=>{activeUser.name=e.target.value}} name="email" className="input" placeholder="${activeUser.name}" />
            <input type="text" onChange={(e)=>{activeUser.password=e.target.value}}name="phone" className="input" placeholder="Phone" />
            </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
