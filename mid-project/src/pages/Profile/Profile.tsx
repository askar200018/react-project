import React from 'react';
import { useActiveUser } from '../../contexts/ActiveUserContext';

interface Props {}

const Profile = (props: Props) => {
  const { activeUser, setActiveUser } = useActiveUser()!;
  return (
    <div>
      <h1>{activeUser.email}</h1>
      <h1>{activeUser.name}</h1>
      <h1>{activeUser.password}</h1>
      <h1>{activeUser.profession}</h1>
    </div>
  );
};

export default Profile;
