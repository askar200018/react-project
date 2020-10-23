import React from 'react';
import { useActiveUser } from '../../contexts/ActiveUserContext';
import './Profile.scss';

interface Props {}

const Profile = (props: Props) => {
  const { activeUser, setActiveUser } = useActiveUser()!;
  return (
    <div className="wrapper-profile">
      <h1 className="active-user">{activeUser.email}</h1>
      <h1 className="active-user">{activeUser.name}</h1>
      <h1 className="active-user">{activeUser.password}</h1>
      <h1 className="active-user">{activeUser.profession}</h1>
    </div>
  );
};

export default Profile;
